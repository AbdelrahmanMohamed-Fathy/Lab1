import { StatusBar } from "expo-status-bar";
import users from "../data";
import { React, useState } from "react";
import {
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const onChangeUsername = (text) => {
    setUsername(text);
    if (textVisible) setTextVisible(false);
    if (!username || !password) return;
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (text) => {
    setPassword(text);
    if (textVisible) setTextVisible(false);
  };

  const [textVisible, setTextVisible] = useState(false);

  const onLoginPress = () => {
    let user = users.find((user) => {
      return user.username == username && user.password == password;
    });
    if (user) {
      console.log("success");
      navigation.navigate("Profile", { user });
    } else {
      console.log("failure");
      setTextVisible(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
        placeholder="Username"
        style={styles.logininput}
      />

      <TextInput
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        placeholder="Password"
        style={styles.logininput}
        secureTextEntry={true}
      />

      {textVisible && (
        <Text style={styles.errorText}>Invalid Username or Password!</Text>
      )}

      <TouchableOpacity onPress={onLoginPress}>
        <Text style={styles.loginbutton}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  title: {
    fontSize: 30,
    fontWeight: "700",
  },
  logininput: {
    margin: 5,

    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    width: "50%",
    backgroundColor: "#fff",
  },
  loginbutton: {
    margin: 5,
    padding: 4,
    borderWidth: 1,
    width: 60,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#3366ff",
    color: "#f2f2f2",
    fontFamily: "Courier",
  },
  errorText: {
    color: "red",
  },
});
