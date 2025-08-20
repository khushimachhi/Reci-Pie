import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


const allRecipes = [
  { id: "1", title: "Pav Bhaji", image: require("../../assets/images/pavbhaji.jpg") },
  { id: "2", title: "Pizza", image: require("../../assets/images/pizza.jpg") },
  { id: "3", title: "Gulab Jamun", image: require("../../assets/images/gulabjamun.jpg") },
];

export default function FavoritesScreen() {
  const router = useRouter();
  
  
  const [favorites, setFavorites] = useState([
    { id: "2", title: "Pizza", image: require("../../assets/images/pizza.jpg") },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text>No favorites yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.item}
              onPress={() => 
                router.push({
                  pathname: "/recipe/[id]",
                  params: { id: item.id },
                })
              }
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff", 
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden', 
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 18,
    padding: 15,
  },
});