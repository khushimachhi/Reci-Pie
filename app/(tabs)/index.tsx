import { View, Text, FlatList, TouchableOpacity, Image, Button } from "react-native";
import { useRouter } from "expo-router";

const recipes = [
  { id: "1", title: "Pav Bhaji", image: require("../../assets/images/pavbhaji.jpg") },
  { id: "2", title: "Pizza", image: require("../../assets/images/pizza.jpg") },
  { id: "3", title: "Gulab Jamun", image: require("../../assets/images/gulabjamun.jpg") },
  { id: "4", title: "Biryani", image: require("../../assets/images/biryani.jpg") },
  { id: "5", title: "Momos", image: require("../../assets/images/momos.jpg") },
  { id: "6", title: "Sandwich", image: require("../../assets/images/sandwich.jpg") },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16, paddingTop:45,  backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Recipes
      </Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, margin: 6, alignItems: "center" }}
            onPress={() =>
              router.push({
                pathname: "/recipe/[id]",
                params: { id: item.id },
              })
            }
          >
            <Image source={item.image} style={{ width: "100%", height: 150, borderRadius: 12 }}/>
            <Text style={{ fontSize: 18, marginTop: 6, textAlign: "center" }}>{item.title}</Text>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
}