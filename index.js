import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db.js";

import { typeDefs } from "./schema.js";

const resolvers = {
    Query:{
        games() {
            return db.games
        },
        game(parent, args){
            return db.games.find((g)=>g.id===args.id)
        },
        reviews() {
            return db.reviews;
        },
        review(parent, args){
            return db.reviews.find((r)=> r.id===args.id)
        },
        authors () {
            return db.authors;
        },
        author(parent, args){
            return db.authors.find((a)=>a.id===args.id)
        }
    },
    Game: {
        reviews(parent){
            return db.reviews.filter((r)=>r.game_id===parent.id)
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter((r)=>r.author_id===parent.id)
        }
    },
    Review: {
        author(parent){
            return db.authors.find((a)=>a.id===parent.author_id)
        },
        game(parent){
            return db.games.find((g)=>g.id===parent.game_id)
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