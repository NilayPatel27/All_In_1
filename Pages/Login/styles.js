import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    textInput: {
        // paddingBottom: 10,
        borderColor: 'gray',
        paddingLeft: 10,
        borderWidth: 0,
        borderRadius: 8,
        color: '#2D333A',
        borderWidth: 1,
        width: '80%'
    },
    first: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    second: {
        width: '90%',
        height: "80%",
        // elevation: 10,
        // shadowRadius: 3.5,
        // shadowColor: 'blue',
        // shadowOpacity: 0.25,
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
        // shadowOffset: { width: 0, height: 5 }
    },
    third: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Divider: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center"
    },
    button: {
        height: 50,
        width: '90%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        backgroundColor: "blue",
        justifyContent: 'center'
    },
    logo: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 30,
        height: "20%",
        alignItems: "center"
    },
    inputField: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 5
    }
})