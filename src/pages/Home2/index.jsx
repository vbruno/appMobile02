import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export class Home extends React.Component {
  state = {
    text: "Text de Entrada",
  };

  componentDidMount () {
    this.setState({ text: "Texto Montado" });
  }

  componentDidUpdate () {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Componente Home 2</Text>
        <Text>------------------------------</Text>
        <Text>Texto de Entrada:</Text>
        <TextInput
          value={this.state.text}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
        />
        <Text>------------------------------</Text>
        <Text>Texto de Saida:</Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
