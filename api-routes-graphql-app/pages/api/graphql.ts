import { createYoga, createSchema } from "graphql-yoga";

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs0" },{ name: "Nextjs1" },{ name: "Nextjs2" },{ name: "Nextjs3" }];
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    // 禁用正文分析（文件上载需要）
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  // 需要明确定义，因为我们的端点位于`/graphql以外的其他路径`
  graphqlEndpoint: "/api/graphql",
});
