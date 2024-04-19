import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./components/AllPlaces";
import AddPlace from "./components/AddPlace";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPlaces" component={AllPlaces} />
          <Stack.Screen name="AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


