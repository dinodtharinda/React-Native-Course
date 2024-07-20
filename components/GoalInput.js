import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enterdGoalText, setEnteredGoalText] = useState();
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
