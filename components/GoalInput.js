import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [goalEnterText, setGoalEnteredText] = useState("");
  function goalInputhandler(enteredText) {
    setGoalEnteredText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(goalEnterText);
    setGoalEnteredText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={goalEnterText}
        style={styles.textInput}
        placeholder="Add New Goal Here"
        onChangeText={goalInputhandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#cccccc",
    borderRadius: 8,
    width: "70%",
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderColor: "#cccccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalInput;
