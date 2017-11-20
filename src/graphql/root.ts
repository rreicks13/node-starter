import { GraphQLSchema } from "graphql";
import { mutation } from "./mutations";
import { query } from "./query";



export const Schema = new GraphQLSchema({
    query,
    mutation
});