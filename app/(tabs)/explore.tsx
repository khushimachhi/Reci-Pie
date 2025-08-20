import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../../graphql/queries";

export default function ExploreScreen() {
  const { loading, error, data } = useQuery(GET_RECIPES);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <FlatList
        data={data.recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 150, borderRadius: 12 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 8 }}>
              {item.title}
            </Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
