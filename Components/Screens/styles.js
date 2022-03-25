import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    Add: {
        height: 50,
        width: '60%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: 'center',
        borderRadius: 25
    },
    cancle: {
        height: 50,
        width: '60%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 25
    },
    delete: {
        height: 50,
        width: '60%',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: 'center',
        borderRadius: 25
    },
    modelview: {
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '100%',
        paddingTop: 20
    },
    modelitem: {
        color: 'black',
        fontWeight: '400',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    homeText: {
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    customerTextInput: {
        paddingBottom: 10,
        borderColor: '#DB4437',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 8,
        color: '#2d333a',
        width: '90%',
        marginLeft: 5,
        marginBottom: 10
    },
    text: {
        color: '#DB4437',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
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
    itemTextInput: {
        paddingBottom: 10,
        borderColor: 'gray',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 8,
        color: '#2d333a',
        width: '80%',
        marginBottom: 10
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
    textInputStyle: {
        height: 40,
        color: 'black',
        borderRadius: 20,
        width: '90%'
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
    },
    col: {
        position: "absolute",
        left: "50%",
        color: '#DB4437',
        fontWeight: "bold",
        paddingHorizontal: 25
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
    customerListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#ADEFD1FF',
        // height: 60,
        marginVertical: 10,
    },
    itemListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#ADEFD1FF',
        marginVertical: 10,
    },
    HomeListItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginHorizontal: 25,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#ADEFD1FF',
        height: 60,
        marginVertical: 10,
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
    homeHeader: {
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: "#171515",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
    itemHeader: {
        height: '10%',
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        backgroundColor: "#e90c59",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },
})

