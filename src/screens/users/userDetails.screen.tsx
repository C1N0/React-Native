import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/authContext";
import { getUserDetails } from "../../api";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c313a",
    marginBottom: 20,
    textAlign: "center",
  },
  detail: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    marginTop: -200,
    left: -50,
  },
});

type User = {
  email: string;
  id: string;
  currentlyGamesPlaying: number;
  gamesLost: number;
  gamesPlayed: number;
  gamesWon: number;
};

const UserDetailsPage = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserDetails(token);
        if (
          response &&
          response.user &&
          response.user.email &&
          response.user.id
        ) {
          setUser({
            email: response.user.email,
            id: response.user.id,
            currentlyGamesPlaying: response.currentlyGamesPlaying,
            gamesLost: response.gamesLost,
            gamesPlayed: response.gamesPlayed,
            gamesWon: response.gamesWon,
          });
        } else {
          console.error("Unexpected API response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, [token]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/topVector.png")}
        style={styles.backgroundImage}
      />
      <Image source={require("../../../assets/data.png")} style={styles.logo} />
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>ID: {user.id}</Text>
      <Text style={styles.detail}>
        Currently Playing Games: {user.currentlyGamesPlaying}
      </Text>
      <Text style={styles.detail}>Games Lost: {user.gamesLost}</Text>
      <Text style={styles.detail}>Games Played: {user.gamesPlayed}</Text>
      <Text style={styles.detail}>Games Won: {user.gamesWon}</Text>
    </View>
  );
};

export default UserDetailsPage;
