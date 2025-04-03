const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.triket.in"
    : process.env.NODE_ENV === "test"
      ? "https://api-dev.triket.in"
      : // : // : "https://api-dev.triket.live"
        "http://localhost:8002"
// "http://localhost:8002"

export default baseUrl
