import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "../(tabs)/index"
import SingleRecipesScreen from "../screens/SingleRecipeScreen";
import FavoritesScreen from "../screens/FavouriteScreen";
import {Button} from "react-native";
import { useRouter } from "expo-router";

export type RootStackParamList = {
  Home: undefined;
  RecipeDetails: { id: string }; 
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const FavoritesButton = () => {
    const router = useRouter(); 
    return (
        <Button
            title="Fav"
            onPress={() => router.push('/screens/FavouriteScreen')}
        />
    );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={index} 
          options={{ 
                title: "Recipe App",
                headerRight: () => <FavoritesButton />,
            }}
        />
        <Stack.Screen 
          name="RecipeDetails" 
          component={SingleRecipesScreen} 
          options={{ title: "Recipe Details" }}
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{ title: "My Favorites" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
