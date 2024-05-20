import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/authContext";
import { View, Text, StyleSheet } from "react-native";

type User = {
  email: string;
  id: string;
  currentlyGamesPlaying: number;
  gamesLost: number;
  gamesPlayed: number;
  gamesWon: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c313a",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});

const UserDetailsPage = () => {
  const { token } = useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      // your existing code
    };

    fetchUserDetails();
  }, [token]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
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
