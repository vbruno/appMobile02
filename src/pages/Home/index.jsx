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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // setText("Texto Montado");
  });

  async function onPress() {
    console.log("Func Funcionando");

    const response = await axios.get("http://10.3.177.112:3333/");

    const result = response.data.find((item) => {
      return item.id == text;
    });

    if (result) {
      setText(result.email);
    } else {
      setText("Usuário não encontrado");
    }

    // console.log(JSON.stringify(result.data, null, 2));
  }

  async function onPost() {
    await axios
      .post("http://10.3.177.112:3333/", {
        name: nome,
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Componente Home</Text>
      <Text>------------------------------</Text>
      <Text>Texto de Entrada:</Text>
      <TextInput onChangeText={setText} />
      <Text>------------------------------</Text>
      <Text>Texto de Saida:</Text>
      <Text>Texto de Saida:</Text>
      <Text>{text}</Text>
      <Text>------------------------------</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Botão de Request</Text>
      </TouchableOpacity>
      <Text>------------------------------</Text>
      <Text>Cadastrar Cliente</Text>
      <Text>Nome:</Text>
      <TextInput onChangeText={setNome} />
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} />
      <TouchableOpacity onPress={onPost}>
        <Text>Botão fazer POST</Text>
      </TouchableOpacity>
      <Text>------------------------------</Text>
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
