import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StatusBar as AndroidStatusBarHeight,
  Platform,
} from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View
      style={{
        marginTop:
          Platform.OS === "android" ? AndroidStatusBarHeight.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
