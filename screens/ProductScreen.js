import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import SelectInput from "react-native-select-input-ios";

import Modal from "react-native-modal";

import ContainerForm from "../components/container/ContainerForm";

import commonStyles from "../common";
import UnitForm from "../components/unit/UnitForm";

export default function ProductScreen({ navigation }) {
  const [modalContainerVisible, setModalContainerVisible] = useState(false);
  const [modalUnitVisible, setModalUnitVisible] = useState(false);

  return (
    <View
      style={[commonStyles.screenContainer, { justifyContent: "flex-start" }]}
    >
      <View>
        <Text style={[commonStyles.h1]}>Add / Edit Product</Text>
      </View>
      <View style={[commonStyles.formRow]}>
        <Text>Nombre: </Text>
        <TextInput style={[commonStyles.textInput]} />
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
          style={[commonStyles.selectInput]}
        />
        <TouchableHighlight
          onPress={() => {
            setModalContainerVisible(!modalContainerVisible);
          }}
        >
          <Text>Agregar Contenedor</Text>
        </TouchableHighlight>
      </View>

      <View style={[commonStyles.formRow]}>
        <Text>Cantidad: </Text>
        <TextInput style={[commonStyles.textInput]} />
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
          style={[commonStyles.selectInput]}
        />
        <TouchableHighlight
          onPress={() => {
            setModalUnitVisible(!modalContainerVisible);
          }}
        >
          <Text>Agregar Unidad</Text>
        </TouchableHighlight>
      </View>

      <View style={[commonStyles.formRow, commonStyles.formButtons]}>
        <TouchableHighlight
          style={[commonStyles.button]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[commonStyles.button, localStyles.buttonSave]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[localStyles.buttonSaveText]}>Save</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Modal isVisible={modalContainerVisible}>
          <ContainerForm setModalContainerVisible={setModalContainerVisible} />
        </Modal>
      </View>
      <View>
        <Modal isVisible={modalUnitVisible}>
          <UnitForm setModalUnitVisible={setModalUnitVisible} />
        </Modal>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  buttonSave: {
    marginLeft: 10,
    backgroundColor: "navy",
  },
  buttonSaveText: {
    color: "#FFF",
  },
});
