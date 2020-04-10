module.exports = {
    Query: {
        products: async (_, __, { dataSources, token }) => {
            const res = await dataSources.productsAPI.getAllProducts();
            await console.log(res)
        },
        authenticationError: (parent, args, context) => {
            throw new AuthenticationError('must authenticate');
        }
    },
}
