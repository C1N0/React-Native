// MenuScreen.tsx
import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";
import { UserDetailsRouteNames } from "../../router/route-names";
import Main from "../../components/Main";

const MenuScreen = () => {
  const auth = useAuth();

  const navigation = useNavigation<any>();

  const handleGoToUserDetails = () => {
    navigation.navigate(UserDetailsRouteNames.USER_DETAILS);
  };

  return <Main goToUserDetails={handleGoToUserDetails} />;
};

export default MenuScreen;
