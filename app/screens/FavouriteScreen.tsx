import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([
    { id: "1", title: "Pizzza" },
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
            <TouchableOpacity style={styles.item}>
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
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});
