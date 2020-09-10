import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import commonStyles from "../../common";

import data from "../../data.json";

const windowHeight = Dimensions.get("window").height;
const productListHeight = windowHeight * 0.7;

export default function ProductList() {
  const colors = ["#eee", "#FFF"];

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <View
            style={[
              localStyles.rowContainer,
              { backgroundColor: colors[index % colors.length] },
            ]}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 50, height: 50 }}
            />
            <View>
              <Text style={{ alignSelf: "center", paddingLeft: 10 }}>
                {item.name} ({item.brand})
              </Text>
              <Text style={{ alignSelf: "center", paddingLeft: 10 }}>
                {item.container} {item.qty} {item.unit}
              </Text>
            </View>
            <View>
              <Text>{item.stock} unidades</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight
                  onPress={() => {
                    console.log("Pressed...");
                  }}
                  style={[commonStyles.button, localStyles.inventoryButton]}
                >
                  <Text>-</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    console.log("Pressed...");
                  }}
                  style={[commonStyles.button, localStyles.inventoryButton, localStyles.plusButton]}
                >
                  <Text>+</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      }}
      style={[localStyles.productList]}
    />
  );
}

const localStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  productList: {
    flexGrow: 0,
    height: productListHeight,
    alignSelf: "stretch",
  },
  inventoryButton: {
    width: 30,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  plusButton: {
    marginLeft: 5
  }
});
