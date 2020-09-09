import React from 'react'
import { Image, View, StyleSheet, Text, FlatList, Dimensions, TouchableHighlight } from 'react-native'

import commonStyle from '../common'

import ProductSearch from '../components/product/ProductSearch'
import ProductList from '../components/product/ProductList';

export default function HomeScreen({ navigation }) {

    return (
        <View style={[ commonStyle.screenContainer ]}>

            <Text style={[ commonStyle.h1 ]}>
                Product List
            </Text>

            <ProductSearch />

            <ProductList />
        
            <TouchableHighlight style={[commonStyle.button, { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginTop: 20, alignSelf: 'flex-end', borderRadius: 20, backgroundColor: 'navy' }]} onPress={() => { navigation.navigate('Product')}}>
                <Text style={{ color: '#FFF'}}> Add </Text>
            </TouchableHighlight>
            
        </View>
    )
}