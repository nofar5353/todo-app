import React from "react";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useState } from "react";

const CreateTask = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addBTN = () => {
    if (title === "") {
      Alert.alert("Please insert title");
    }
    if (text === "") {
      Alert.alert("Please insert text");
    } else {
      navigation.navigate({
        name: "HomePage",
        params: { title: title, text: text },
        merge: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
        <Text style={styles.text}> Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(t) => setTitle(t)}
          value={title}
        />
        <Text style={styles.text}> Text</Text>
        <TextInput
          style={styles.input}
          onChangeText={(t) => setText(t)}
          value={text}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.createBTN}
            onPress={addBTN}
          >
            <Text style={styles.createBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#072227",
  },
  inputContainer: {
    flex: 0.5,
    height: "50%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#AEFEFF",
    borderColor: "#35858B",
    borderRadius: 10,
  },
  text: {
    color: "#35858B",
    fontSize: 17,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  createBTN: {
    borderColor: "#AEFEFF",
    borderWidth: 1,
    flex: 0.5,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#072227",
    borderRadius: 10,
  },
  createBtnText: {
    color: "#AEFEFF",
  },
});

export default CreateTask;
