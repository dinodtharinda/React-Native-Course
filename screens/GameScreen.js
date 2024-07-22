import { Text, View, StyleSheet,SafeAreaView } from "react-native";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.screen}>
     <Title>Opponenet's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:"#ddb52f",
    textAlign:'center',
    borderWidth:2,
    borderColor:"#ddb52f",
    padding:12
  }
});

export default GameScreen;
