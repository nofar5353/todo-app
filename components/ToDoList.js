import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import ListItem from "./ListItem";

export default function ToDoList({ route, navigation }) {
  const [tasksList, setTasksList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    if (route.params?.title) {
      addTask(route.params?.title, route.params?.text);
    }
  }, [route.params?.title]);
  const addTask = (title, text) => {
    const newtask = { id: idCounter, title: title, text: text };
    setIdCounter((prev) => prev + 1);
    setTasksList((prev) => [...prev, newtask]);
  };

  const deleteTask = (taskId) => {
    setTasksList((prev) => prev.filter((t) => t.id != taskId));
  };

  const renderItem = ({ item: t }) => (
    <ListItem id={t.id} title={t.title} deleteTask={deleteTask} text={t.text} />
  );
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.itemListContainer}>
        <FlatList
          keyExtractor={(t) => t.id}
          data={tasksList}
          renderItem={renderItem}
        />
      </SafeAreaView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addBtn}
          onPress={() => navigation.navigate("CreateTask")}
        >
          <Text style={styles.btnAddText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#072227",
  },
  itemListContainer: {
    flex: 1,
    borderColor: "#1a1814",
    borderWidth: 3,
  },
  btnContainer: {
    backgroundColor: "#AEFEFF",
    position: "absolute",
    right: "10%",
    top: "85%",
    alignItems: "center",
    borderRadius: 800,
  },
  addBtn: {
    width: 80,
    height: 80,
    alignItems: "center",
  },
  btnAddText: {
    color: "#35858B",
    fontSize: 50,
    padding: 10,
  },
});
