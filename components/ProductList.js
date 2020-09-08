import React, { Component } from "react";
import { Text, View, Image, FlatList, StyleSheet, TouchableHighlight } from "react-native";

import commonStyle from '../common';

import data from '../data.json';

export default function ProductList() {
  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <Text style={[ commonStyle.h1 ]}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={[localStyles.rowContainer]}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ alignSelf: "center", paddingLeft: 10 }}>
                {item.name}
              </Text>
              <Text style={{ alignSelf: "center", paddingLeft: 10 }}>
                {item.container} {item.qty} {item.unit}
              </Text>
              <TouchableHighlight onPress={() => { console.log('Pressed...')}} style={{ backgroundColor: 'gray', width: 50, height: 30, alignItems: 'center', justifyContent: 'center'}}>
                  <Text>+</Text>
              </TouchableHighlight>
            </View>
          );
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  rowContainer: {
    backgroundColor: "yellow",
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});