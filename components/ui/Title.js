import { Text, StyleSheet, Dimensions ,Platform } from "react-native";


function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  title: {
    fontFamily:'open-sans-bold',
    fontSize: deviceWidth *0.03,
    // fontWeight: "bold",
    color:'white',
    textAlign: "center",
    // borderWidth: Platform.OS === 'android'? 3:0,
    borderWidth:Platform.select({ios:4, android:2}),
    borderColor:'white',
    padding: 12,
    maxWidth:'80%',
    width:300
  },
});

export default Title;
