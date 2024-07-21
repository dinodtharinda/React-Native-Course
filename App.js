import { StyleSheet, View, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
   <StartGameScreen/>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});
