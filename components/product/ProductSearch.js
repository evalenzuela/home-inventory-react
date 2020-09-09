import React from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

import commonStyle from '../../common'

export default function ProductSearch() {

    return (
        <View style={[localStyle.searchContainer]}>
            <TextInput style={[commonStyle.textInput, localStyle.searchInput]} /> 
            <TouchableHighlight style={[commonStyle.button, localStyle.searchButton]}>
                <Text style={[localStyle.searchButtonText]}>
                    Search
                </Text>
            </TouchableHighlight>
        </View>
    )

}

const localStyle = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 20
    },
    searchInput: {
        width: '80%',
        height: 30,
        paddingHorizontal: 10
    },
    searchButton: {
        height: 30,
        justifyContent: 'center'
    },
    searchButtonText: {
        color: '#FFF',
        fontSize: 14,
        paddingHorizontal: 5
    }
})