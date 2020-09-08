import React from "react"
import { Text, View, Image, FlatList, StyleSheet, TouchableHighlight, Dimensions } from "react-native"

import ProductSearch from './ProductSearch'

import commonStyle from '../common';

import data from '../data.json';

export default function ProductList() {

  const windowHeight = Dimensions.get('window').height;
  const productListHeight = windowHeight * 0.7;

  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <Text style={[ commonStyle.h1 ]}>Product List</Text>

      <ProductSearch />

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
        style={{ flexGrow: 0, height: productListHeight }}
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
