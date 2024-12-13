import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SemestreScreen from "./src/screens/SemestreScreen";


// Definindo o tipo para as telas e os parâmetros
export type RootStackParamList = {
  Login: undefined;
  Home: { usuarioId: number; matricula: string };
};

// Criando o Stack Navigator para as telas Home e Login
const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Oculta o header da tela Home
      />
    </Stack.Navigator>
  );
};

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Semestres" component={SemestreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
