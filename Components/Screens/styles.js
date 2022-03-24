import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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

const Customer = StyleSheet.create({
    textInputStyle: {
        height: 40,
        color: 'black',
        borderRadius: 20,
        width: '90%'
    },
    Divider: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        // height: 60,
        marginVertical: 10,
    },
    details: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ffd7ae",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    item: {
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6,
    },
    story: {
        width: 55,
        height: 55,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#00203FFF',
        margin: 5,
        marginLeft: 15
    },
    title: {
        fontSize: 18,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#DB4437',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    col: {
        position: "absolute",
        left: "50%",
        color: '#DB4437',
        fontWeight: "bold",
        paddingHorizontal: 25
    },
    header: {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: "#DB4437",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
})
export { styles, Customer }
