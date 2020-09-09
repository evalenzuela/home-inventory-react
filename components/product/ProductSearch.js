import React from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'

import commonStyles from '../../common'

export default function ProductSearch() {

    return (
        <View style={[localStyles.searchContainer]}>
            <TextInput style={[commonStyles.textInput, localStyles.searchInput]} /> 
            <TouchableHighlight style={[commonStyles.button, localStyles.searchButton]}>
                <Text style={[localStyles.searchButtonText]}>
                    Search
                </Text>
            </TouchableHighlight>
        </View>
    )

}

const localStyles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 20
    },
    searchInput: {
        width: '80%',
        height: 30
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