import React from "react";
import styled from "styled-components/native";
import { StatusBar, Text, Image, StyleSheet } from "react-native";

const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  background-color: #f5fcff;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

const PageLogo = styled.Image`
  width: 250px;
  height: 150px;
  margin-bottom: 50px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  padding: 8px;
  background-color: #1c313a;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  topImage: {
    width: "120%",
    height: 130,
  },
});

export interface IMain {
  goToUserDetails: () => void;
}

const MainMenu: React.FC<IMain> = ({ goToUserDetails }) => {
  return (
    <StyledContainer>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("../../assets/topVector.png")}
        style={{ ...styles.topImage, marginTop: -50 }}
        resizeMode="stretch"
      />
      <InnerContainer>
        <PageLogo
          resizeMode="contain"
          source={require("../../assets/info.png")}
        />
        <Button onPress={goToUserDetails}>
          <Text style={{ color: "#fff" }}>User Details</Text>
        </Button>
      </InnerContainer>
      <Image
        source={require("../../assets/topVector.png")}
        style={{
          ...styles.topImage,
          position: "absolute",
          left: 0,
          bottom: -70,
          transform: [{ scaleY: -1 }, { skewY: "-20deg" }],
        }}
        resizeMode="stretch"
      />
    </StyledContainer>
  );
};

export default MainMenu;
