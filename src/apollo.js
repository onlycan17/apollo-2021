import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql-movie-api-2021.herokuapp.com/",
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, {id, isLiked}, {cache}) => {
                console.log(id);
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked : () => !isLiked,
                    },    
                });
            }
        }
    }
});

export default client;