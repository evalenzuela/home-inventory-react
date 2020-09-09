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

export default function ProductScreen({ navigation }) {
  return (
    <View style={[commonStyles.screenContainer, {justifyContent: 'flex-start'}]}>
      <View>
        <Text style={[commonStyles.h1]}>Add / Edit Product</Text>
      </View>
      <View style={[commonStyles.formRow]}>
        <Text>Nombre: </Text>
        <TextInput style={[commonStyles.textInput, localStyles.formTextInput]} />
      </View>

      <View style={[commonStyles.formRow]}>
        <Text>Contenedor: </Text>
        <SelectInput
            mode="dropdown"
            options={[
            { value: "Sobre", label: "Sobre" },
            { value: "Lata", label: "Lata" },
            { value: "Caja", label: "Caja" },
            ]}
            style={[commonStyles.selectInput, localStyles.formSelectInput]}
        />
      </View>

      <View style={[commonStyles.formRow]}>
        <Text>Cantidad: </Text>
        <TextInput style={[commonStyles.textInput, localStyles.formTextInput]} />
      </View>

      <View style={[commonStyles.formRow]}>
        <Text>Unidad: </Text>
        <SelectInput
            mode="dropdown"
            options={[
                { value: "kg", label: "kg" },
                { value: "gr", label: "gr" },
                { value: "ml", label: "ml" },
                { value: "lt", label: "lt" },
            ]}
            style={[commonStyles.selectInput, localStyles.formSelectInput]}
        />
      </View>

      <View style={[commonStyles.formRow, commonStyles.formButtons]}>
        <TouchableHighlight style={[commonStyles.button]} onPress={() => navigation.navigate('Home')}>
          <Text>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[commonStyles.button, localStyles.buttonSave]} onPress={() => navigation.navigate('Home')}>
          <Text style={[localStyles.buttonSaveText]}>Save</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  formTextInput: {
      height: 30
  },
  formSelectInput: {
      height: 30
  },
  buttonSave: {
    marginLeft: 10,
    backgroundColor: 'navy'
  },
  buttonSaveText: {
    color: '#FFF'
  }
});
