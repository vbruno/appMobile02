import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Home() {
  const [text, setText] = useState("Texto Simples");

  useEffect(() => {
    // setText("Texto Montado");
  });

  async function onPress() {
    console.log("Func Funcionando");

    const response = await axios.get("http://10.3.170.62:3333/");

    const result = response.data.find((item) => {
      return item.id == 10;
    });

    if (result) {
      setText(result.email);
    } else {
      setText("Usuário não encontrado");
    }

    // console.log(JSON.stringify(result.data, null, 2));
  }

  return (
    <View style={styles.container}>
      <Text>Componente Home</Text>
      <Text>------------------------------</Text>
      <Text>Texto de Entrada:</Text>
      <TextInput onChangeText={(Text) => setText(Text)} />
      <Text>------------------------------</Text>
      <Text>Texto de Saida:</Text>
      <Text>{text}</Text>
      <Text>------------------------------</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Botão de Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
