import React from "react";
import users from "../data";
import { Text, Image, StyleSheet, SafeAreaView, TextInput } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const user = route.params.user;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{
          uri: user.image,
        }}
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.name}
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.username}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.email}
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.phone}
      />

      <Text style={styles.label}>Website</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.website}
      />

      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.fields}
        editable={false}
        placeholder={user.company.name}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "Black",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    position: "absolute",
    top: 10,
    marginBottom: 10,
  },
  fields: {
    borderWidth: 1,
    minWidth: "60%",
    margin: 6,
    borderRadius: 15,
  },
  label: {
    marginTop: 5,
    textAlign: "left",
    minWidth: "40%",
    right: 45,
    fontSize: 18,
    color: "#6666ff",
  },
});
