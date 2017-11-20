const app = require('express')();
const graphql = require('express-graphql');

import { Schema } from "./graphql/root";
require('./config/sequelize.config');

app.use('/', graphql({
    schema: Schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log('starting on port 5000');
})