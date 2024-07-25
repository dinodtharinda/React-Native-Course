import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding:deviceWidth * 0.03,
    marginVertical:deviceWidth * 0.02,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText:{
    fontFamily:'open-sans',
    fontSize:deviceWidth * 0.035
  }
});

export default GuessLogItem;
