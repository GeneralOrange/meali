import { StyleSheet } from 'react-native'

export const createNewListStyles = StyleSheet.create({
    wrapper: {
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F07F19',
        borderRadius: 100
        
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    },
    input: {
        borderColor: '#F07F19',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#fafafa',
        width: 250,
        height: 50,
        fontSize: 25
    }
});