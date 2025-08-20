import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { recipes } from "../recipe/recipe";  

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.section}>Category: {recipe.category}</Text>

      <Text style={styles.section}>Ingredients:</Text>
      {recipe.ingredients.map((ing, index) => (
        <Text key={index} style={styles.text}>• {ing}</Text>
      ))}

      <Text style={styles.section}>Steps:</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.text}>{index + 1}. {step}</Text>
      ))}

      <Text style={styles.section}>Notes:</Text>
      <Text style={styles.text}>{recipe.notes}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  image: { width: "100%", height: 200, borderRadius: 12, marginBottom: 12 },
  section: { fontSize: 20, fontWeight: "600", marginTop: 12 },
  text: { fontSize: 16, marginVertical: 4 },
});
