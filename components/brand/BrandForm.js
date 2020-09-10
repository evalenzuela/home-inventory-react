import React from 'react'
import { View, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native'

import commonStyles from '../../common'

export default function BrandForm(props) {

    return (
        <View style={{ backgroundColor: '#FFF', padding: 20 }}>
            <View style={[commonStyles.formRow]}>
                <Text>Nombre</Text>
                <TextInput style={[commonStyles.textInput]} />
            </View>

            <View style={[commonStyles.formRow, commonStyles.formButtons]}>
                <TouchableHighlight style={[commonStyles.button]} onPress={() => {
                    props.setModalBrandVisible(false)
                }}>
                    <Text>Close</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[commonStyles.button, localStyles.buttonSave]} onPress={() => {
                    props.setModalBrandVisible(false)
                }}>
                    <Text style={[localStyles.buttonSaveText]}>Save</Text>
                </TouchableHighlight>
            </View>
        </View>
    )

}

const localStyles = StyleSheet.create({
    buttonSave: {
        marginLeft: 10,
        backgroundColor: 'navy'
    },
    buttonSaveText: {
        color: '#FFF'
    }
})