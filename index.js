import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db.js";

import { typeDefs } from "./schema.js";

const resolvers = {
    Query:{
        games() {
            return db.games
        },
        reviews() {
            return db.reviews;
        },
        authors () {
            return db.authors;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers //handle the queries based on the schema and type
});

const url = await startStandaloneServer(server, {
    listen : {port: 4000}
});

console.log("Server ready at port 4000");