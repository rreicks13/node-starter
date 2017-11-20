import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";
import { UserType } from "./types";
import { Users } from "../models/user";

export const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parentValue, args) {
                return Users.findAll({
                    where: {
                        id: Number(args.id)    
                    }
                });    
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return Users.findAll();
            }
        }
    }
});