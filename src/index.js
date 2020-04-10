require('dotenv').config();

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const ProductAPI = require('./datasources/products')

const dataSources = () => ({
    productsAPI: new ProductAPI()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || ' ';
        return { token };
    },
    dataSources,
    introspection: true,
    playground: true,
    // engine: {
    //     apiKey: process.env.ENGINE_API_KEY
    // }
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
