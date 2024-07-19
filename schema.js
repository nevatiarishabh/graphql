export const typeDefs =  `#graphql
    type Game {
        id: ID!,
        title: String!,
        platforms: [String!]!,
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author!
    }
    type Author{
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review]
    }

    type Query{  #compulsory - gatekeeping entry points in the graph
        reviews: [Review],
        review(id: ID!): Review,
        games: [Game],
        game(id: ID!): Game,
        authors: [Author],
        author(id: ID!): Author
    }
`