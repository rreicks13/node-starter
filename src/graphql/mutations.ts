import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { Users } from "../models/user";
import { UserType } from "./types";

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(parentValue, args) {
                return Users.create({name: args.name, email: args.email});
            }
        }
    }
}) 