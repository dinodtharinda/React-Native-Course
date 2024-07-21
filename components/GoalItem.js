import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable  android_ripple={{ color: "#CB94FF" }} onPress={props.onDeleteItem.bind(this,props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#6C3FE8",
    margin: 8,
    borderRadius: 8,
  },
  goalText: {
    margin: 8,
    color: "#ffffff",
  },
});

export default GoalItem;
