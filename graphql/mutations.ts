import { gql } from "@apollo/client";

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $title: String!
    $ingredients: [String!]!
    $steps: [String!]!
    $category: String!
    $image: String
    $notes: String
  ) {
    addRecipe(
      title: $title
      ingredients: $ingredients
      steps: $steps
      category: $category
      image: $image
      notes: $notes
    ) {
      id
      title
      category
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation UpdateRecipe(
    $id: ID!
    $title: String!
    $ingredients: [String!]!
    $steps: [String!]!
    $category: String!
    $image: String
    $notes: String
  ) {
    updateRecipe(
      id: $id
      title: $title
      ingredients: $ingredients
      steps: $steps
      category: $category
      image: $image
      notes: $notes
    ) {
      id
      title
      category
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;
