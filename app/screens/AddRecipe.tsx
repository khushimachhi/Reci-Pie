import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, Text } from "react-native";
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../graphql/mutations";

export default function AddRecipe({ navigation }: any) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const [addRecipe] = useMutation(ADD_RECIPE, {
    onCompleted: () => navigation.goBack(),
  });

  const handleSubmit = () => {
    addRecipe({
      variables: {
        title,
        ingredients: ingredients.split(","),
        steps: steps.split("."),
        category,
        notes,
      },
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Title</Text>
      <TextInput value={title} onChangeText={setTitle} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Ingredients (comma separated)</Text>
      <TextInput value={ingredients} onChangeText={setIngredients} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Steps (separate with .)</Text>
      <TextInput value={steps} onChangeText={setSteps} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Category</Text>
      <TextInput value={category} onChangeText={setCategory} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Notes</Text>
      <TextInput value={notes} onChangeText={setNotes} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Button title="Save Recipe" onPress={handleSubmit} />
    </ScrollView>
  );
}
