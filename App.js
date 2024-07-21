import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Button,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);

  function addGoalHandler(goalEnterText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: goalEnterText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    console.log(id)
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    marginTop: 24,
  },

  goalContainer: {
    paddingTop: 16,
    flex: 5,
  },
});
