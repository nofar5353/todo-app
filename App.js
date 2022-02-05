import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import ToDoList from "./components/ToDoList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "./components/CreateTask";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          options={{
            title: "My Tasks",
            headerStyle: { backgroundColor: "#AEFEFF" },
            headerTintColor: "#35858B",
          }}
          component={ToDoList}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTask}
          options={{
            title: "Create task",
            headerStyle: { backgroundColor: "#AEFEFF" },
            headerTintColor: "#35858B",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
