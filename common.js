import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'stretch'
    },
    h1: {
        color: '#000',
        fontSize: 20,
        marginBottom: 24,
        alignSelf: 'center',
        marginTop: 24
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    selectInput: {
        backgroundColor: '#f9faff',
		borderColor: '#e2e9ff',
		borderWidth: 1,
		borderRadius: 3
    },
    button: {
        backgroundColor: 'gray',
        color: '#000'
    }
});