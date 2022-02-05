import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const ListItem = (props) => {
  const deleteTask = () => {
    props.deleteTask(props.id);
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.titelText}>{props.title}</Text>
        <Text style={styles.textText}>{props.text}</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addBtn}
          onPress={deleteTask}
        >
          <Text style={styles.btnAddText}>
            <Icon name="trash-outline" type="ionicon" color="#072227" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  taskContainer: {
    margin: 10,
    width: "95%",
    backgroundColor: "#AEFEFF",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
  },
  titelText: {
    fontSize: 18,
    margin: 5,
    color: "#072227",
    fontWeight: "600",
  },
  textText: {
    fontSize: 18,
    marginLeft: 6,
    marginBottom: 12,
    color: "#072227",
  },
  leftContainer: {
    flex: 5,
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItem;
