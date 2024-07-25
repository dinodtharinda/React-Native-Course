import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[, style, styles.instructionText]}>{children}</Text>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: deviceWidth * 0.03,
  },
});

export default InstructionText;
