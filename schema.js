export const typeDefs =  `#graphql
    type Game {
        id: ID!,
        title: String!,
        platforms: [String!]!
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!
    }
    type Author{
        id: ID!,
        name: String!,
        verified: Boolean!
    }

    type Query{  #compulsory - gatekeeping entry points in the graph
        reviews: [Review],
        games: [Game],
        authors: [Author]
    }
`