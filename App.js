import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import ListItem from "./src/components/ListItem/ListItem";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(s => ({ places: [...s.places, s.placeName] }));
  };

  render() {
    const placesOutput = this.state.places.map(p => (
      <ListItem key={p} placeName={p} onItemPress={() => alert("pressed", p)} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainter}>
          <TextInput
            placeholder="Awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
          />
          <Button
            title="add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainter: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "70%"
  },
  listContainer: {
    width: "100%"
  }
});
