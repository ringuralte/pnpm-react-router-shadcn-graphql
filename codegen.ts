import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8002/graphql",
  documents: ["app/**/*.tsx", "app/**/*.ts"],
  generates: {
    "app/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      config: {
        useTypeImports: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
