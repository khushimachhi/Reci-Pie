
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function SingleRecipeScreen({ route }: any) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals ? data.meals[0] : null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  if (!recipe) return <Text style={styles.error}>Recipe not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text>{recipe.strCategory}</Text>
      <Text>{recipe.strInstructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loader: { flex: 1, justifyContent: "center" },
  error: { color: "red", textAlign: "center", marginTop: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
