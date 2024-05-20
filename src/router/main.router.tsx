import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import MenuScreen from "../screens/menu/Main.screen";
import { UserDetailsRouteNames } from "./route-names";
import UserDetailsScreen from "../screens/users/userDetails.screen";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c313a",
  },
});

const MainStack = createNativeStackNavigator();

const mainRoutes = (
  <MainStack.Navigator initialRouteName="Menu">
    <MainStack.Screen
      name="Menu"
      component={MenuScreen}
      options={{
        headerTitle: (props) => <Text style={styles.title}>MainMenu</Text>,
      }}
    />
    <MainStack.Screen
      name={UserDetailsRouteNames.USER_DETAILS}
      component={UserDetailsScreen}
    />
  </MainStack.Navigator>
);

export default mainRoutes;
