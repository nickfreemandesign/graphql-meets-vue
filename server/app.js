const express = require('express')
const app = express()
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const db = require('./db')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

module.exports = app
