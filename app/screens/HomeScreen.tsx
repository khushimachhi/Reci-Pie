import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const recipes = [
  { id: "1", title: "Pav Bhaji", image: require("../../assets/images/pavbhaji.jpg") },
  { id: "2", title: "Pizza", image: require("../../assets/images/pizza.jpg") },
  { id: "3", title: "Gulab Jamun", image: require("../../assets/images/gulabjamun.jpg") },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
       Recipes
      </Text>  
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() =>
              router.push({
                pathname: "/recipe/[id]",
                params: { id: item.id },
              })
            }
          >
            
            
            <Text style={{ fontSize: 18, marginTop: 6 }}>{item.title}</Text>

            
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
