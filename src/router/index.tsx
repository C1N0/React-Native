import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import authRoutes from "./auth.router";
import { useAuth } from "../hooks/authContext";
import gameRoutes from "./game.router";
import mainRoutes from "./main.router";

const Router: React.FC = () => {
  const auth = useAuth();
  return (
    <NavigationContainer>
      {auth.token ? mainRoutes : authRoutes}
    </NavigationContainer>
  );
};

export default Router;
