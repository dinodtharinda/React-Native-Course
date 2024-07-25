import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.constiner}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  constiner: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth* 0.04,
    borderRadius: 8,
    margin: deviceWidth* 0.04,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth* 0.06,
    fontWeight: "bold",
  },
});

export default NumberContainer;
