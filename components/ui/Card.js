import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: deviceWidth < 380 ? 8 : 16,
    marginTop:deviceWidth < 380 ?18: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary600,
    elevation: 4, //only work with android
    //show not working on android , only work with ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});

export default Card;
