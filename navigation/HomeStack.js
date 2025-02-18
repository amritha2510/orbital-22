import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroceryScreen from '../screens/GroceryScreen';
import { DrawerScreenStack } from "./DrawerStack";
import AddPantryItemScreen from "../screens/AddPantryItemScreen";
import PantryScreen from "../screens/PantryScreen"


const HomeStack = createNativeStackNavigator();
export function HomeScreenStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
            name="GroceryList" 
            component={DrawerScreenStack}
            options={{ headerShown: false }} />
            <HomeStack.Screen
            name="AddPantryItem"
            component={AddPantryItemScreen}
            />
            <HomeStack.Screen
            name="PantryList"
            component={PantryScreen}
            />
        </HomeStack.Navigator>
    );
}
