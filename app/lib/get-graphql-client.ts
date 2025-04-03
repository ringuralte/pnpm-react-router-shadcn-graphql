import { ClientError, GraphQLClient } from "graphql-request";
import baseUrl from "./baseUrl";
import extractXsrfFromCookie from "./extractXsrfFromCookie";

const refreshCsrfToken = async () => {
  try {
    await fetch(`${baseUrl}/csrf`, {
      credentials: "include",
      method: "GET",
    });
    // After fetching, the browser should have the new cookie
    if (typeof document !== "undefined") {
      const cookie = document.cookie;
      return extractXsrfFromCookie(cookie) || "";
    }
  } catch (error) {
    console.error("Failed to refresh CSRF token:", error);
  }
  return "";
};

const getGraphqlClient = (token?: string) => {
  let xsrfToken = "";

  if (typeof document !== "undefined") {
    const cookie = document.cookie;
    xsrfToken = extractXsrfFromCookie(cookie) || "";
  }

  const graphqlClientInstance = new GraphQLClient(`${baseUrl}/graphql`, {
    credentials: "include",
  });
  graphqlClientInstance.setHeaders({
    Authorization: `Bearer ${token}`,
    "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
  });

  const originalRequest = graphqlClientInstance.request.bind(
    graphqlClientInstance
  );
  graphqlClientInstance.request = async (...args) => {
    try {
      return await originalRequest(...args);
    } catch (error) {
      console.log("caught error");
      if (error instanceof ClientError && error?.response?.status === 419) {
        console.log("caught error is 419");
        const newToken = await refreshCsrfToken();
        if (newToken) {
          graphqlClientInstance.setHeader(
            "X-XSRF-TOKEN",
            decodeURIComponent(newToken)
          );
          return originalRequest(...args);
        }
      }
      throw error;
    }
  };

  return graphqlClientInstance;
};

export default getGraphqlClient;
