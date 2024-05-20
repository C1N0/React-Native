import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login.screen";
import RegisterScreen from "../screens/auth/Register.screen";
import { AuthRouteNames } from "./route-names";
import { Text, ImageBackground } from "react-native";

const AuthStack = createNativeStackNavigator();

const authRoutes = (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name={AuthRouteNames.LOGIN}
      component={LoginScreen}
      options={{
        headerTitle: (props) => (
          <Text
            {...props}
            style={{
              color: "purple",
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 15,
            }}
          >
            Login
          </Text>
        ),
        headerBackground: () => (
          <ImageBackground
            source={require("../../assets/topVector.png")}
            style={{
              flex: 1,
              right: 10,
              width: "120%",
              marginTop: -5,
              transform: [{ scaleY: -1 }],
            }}
            resizeMode="cover"
          />
        ),
      }}
    />
    <AuthStack.Screen
      name={AuthRouteNames.REGISTER}
      component={RegisterScreen}
      options={{
        headerTitle: (props) => (
          <Text
            {...props}
            style={{
              color: "purple",
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 15,
            }}
          >
            Register
          </Text>
        ),
        headerBackground: () => (
          <ImageBackground
            source={require("../../assets/topVector.png")}
            style={{
              flex: 1,
              right: 10,
              width: "120%",
              marginTop: -5,
              transform: [{ scaleY: -1 }],
            }}
            resizeMode="cover"
          />
        ),
      }}
    />
  </AuthStack.Navigator>
);

export default authRoutes;
