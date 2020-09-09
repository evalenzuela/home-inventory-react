import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import SelectInput from "react-native-select-input-ios";

import commonStyles from "../common";

export default function ProductScreen() {
  return (
    <View style={[commonStyles.screenContainer]}>
      <View>
        <Text style={[commonStyles.h1]}>Add / Edit Product</Text>
      </View>
      <View>
        <Text>Nombre: </Text>
        <TextInput style={[commonStyles.textInput]} />
      </View>

      <View>
        <Text>Contenedor: </Text>
        <SelectInput
          mode="dropdown"
          options={[
            { value: "Sobre", label: "Sobre" },
            { value: "Lata", label: "Lata" },
            { value: "Caja", label: "Caja" },
          ]}
          style={[commonStyles.selectInput]}
        />
      </View>

      <View>
        <Text>Cantidad: </Text>
        <TextInput style={[commonStyles.textInput]} />
      </View>

      <View>
        <Text>Unidad: </Text>
        <SelectInput
          options={[
            { value: "kg", label: "kg" },
            { value: "gr", label: "gr" },
            { value: "ml", label: "ml" },
            { value: "lt", label: "lt" },
          ]}
          style={[commonStyles.selectInput]}
        />
      </View>

      <View>
        <TouchableHighlight style={[commonStyles.button]}>
          <Text>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[commonStyles.button]}>
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
