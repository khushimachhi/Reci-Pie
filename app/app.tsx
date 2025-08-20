import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";


export type RootStackParamList = {
  RecipeList: undefined;
  RecipeDetails: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();


type RecipeListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RecipeList"
>;


type RecipeDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "RecipeDetails"
>;


function RecipeListScreen({
  navigation,
}: {
  navigation: RecipeListScreenNavigationProp;
}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recipe List</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("RecipeDetails", { id: "123" })}
      />
    </View>
  );
}


function RecipeDetailsScreen({
  route,
}: {
  route: RecipeDetailsScreenRouteProp;
}) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recipe Details Screen</Text>
      <Text>Recipe ID: {id}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeList">
        <Stack.Screen name="RecipeList" component={RecipeListScreen} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
