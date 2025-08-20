
const { ApolloServer, gql } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});



let recipes = [
  {
    id: "1",
    title: "Pav Bhaji",
    ingredients: ["pav", "butter", "mixed vegetables", "spices"],
    steps: "Cook veggies, mash, mix with spices. Serve with buttered pav.",
    category: "Dinner",
    image: null,
    notes: [],
  },
];



const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    ingredients: [String!]!
    steps: String!
    category: String!
    image: String
    notes: [String]
  }

  type Query {
    recipes: [Recipe!]!
  }

  type Mutation {
    addRecipe(title: String!, ingredients: [String!]!, steps: String!, category: String!, image: String): Recipe!
    deleteRecipe(id: ID!): Boolean!
  }
`;


const resolvers = {
  Query: {
    recipes: () => recipes,
  },
  Mutation: {
    addRecipe: (_, { title, ingredients, steps, category, image }) => {
      const newRecipe = {
        id: String(recipes.length + 1),
        title,
        ingredients,
        steps,
        category,
        image,
        notes: [],
      };
      recipes.push(newRecipe);
      return newRecipe;
    },
    deleteRecipe: (_, { id }) => {
      const index = recipes.findIndex((r) => r.id === id);
      if (index === -1) return false;
      recipes.splice(index, 1);
      return true;
    },
  },
};


