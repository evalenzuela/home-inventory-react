import React from 'react'
import { Image, View, StyleSheet, Text, FlatList, Dimensions, TouchableHighlight } from 'react-native'

import commonStyles from '../common'

import ProductSearch from '../components/product/ProductSearch'
import ProductList from '../components/product/ProductList';

export default function HomeScreen({ navigation }) {

    return (
        <View style={[ commonStyles.screenContainer ]}>

            <Text style={[ commonStyles.h1 ]}>
                Product List
            </Text>

            <ProductSearch />

            <ProductList />
        
            <TouchableHighlight style={[commonStyles.button, localStyles.addButton]} onPress={() => { navigation.navigate('Product')}}>
                <Text style={{ color: '#FFF'}}> + </Text>
            </TouchableHighlight>
            
        </View>
    )
}

const localStyles = StyleSheet.create({ 
    addButton: { 
        width: 40, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20, 
        alignSelf: 'flex-end', 
        borderRadius: 20, 
        backgroundColor: 'navy',
        paddingHorizontal: 0,
        paddingVertical: 0
    }
})