import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ placeName, onItemPress }) => (
  <TouchableOpacity onPress={onItemPress}>
    <View style={styles.listItem}>
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee"
  }
});

export default ListItem;
