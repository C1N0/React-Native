import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, Text, Image, StyleSheet, Alert } from "react-native";
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
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

const StyledInput = styled.TextInput`
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-bottom: 10px;
  padding: 8px;
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
  topImageContainer: {},
  topImage: {
    width: "120%",
    height: 130,
  },
});
export interface ILogin {
  onSubmit: (email: string, password: string) => void;
}

const Register: React.FC<ILogin> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
    Alert.alert("Success", "Registration was successful!", [{ text: "OK" }]);
  };

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
          resizeMode="cover"
          source={require("../../assets/form.png")}
        />
        <StyledInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <StyledInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button onPress={handleSubmit}>
          <Text style={{ color: "#fff" }}>Register</Text>
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

export default Register;
