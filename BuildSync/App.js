import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "./components/Button";

export default function App() {

  
  const handlePress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textos}>
       BuildSync
      </Text>
      <Image
        source={require("./assets/logo1.png")}
        style={{ width: 200, height: 200 }}
      />
      <text>¿Ya tienes cuenta?</text>
      <Button title="Iniciar Sesion " onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textos: {
    color: "#fff",
    fontSize: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
