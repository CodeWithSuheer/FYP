import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.xxLarge,
        marginBottom: SIZES.xxLarge,
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    formData: {
        width: '90%',
        margin: 'auto',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formLabel: {
        fontSize: 16,
        fontWeight: 400,
        marginVertical: 8,
    },
    textInput: {
        width: 330,
        height: 48,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 5,
        margin: 'auto',
        marginVertical: 4,
        paddingLeft: 10,
    },
    dropdown: {
        width: 330,
        height: 48,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 5,
        margin: 'auto',
        marginVertical: 4,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: COLORS.tertiary,
        borderRadius: 15,
        marginTop: 25,
        padding: 14,
        alignItems: 'center',
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },

    imageContainer: {
        width: "100%",
        margin: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    image: {
        height: 250,
        width: 260,
    },

    radioContainer: {
        marginVertical: 10,
    },
    radioLabel: {
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        color: COLORS.primary,
    },
    radioGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 20,
    },
    radioButton: {
        width: 130,
        height: 48,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 5,
        margin: 'auto',
        marginVertical: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 13,
        // paddingBottom: 10,
    },
    radioText: {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: "600",
        alignItems: "center",
        textAlign: 'center'
    },
    // dropdown: {
    //     height: 50,
    //     borderColor: 'gray',
    //     borderWidth: 0.5,
    //     borderRadius: 8,
    //     paddingHorizontal: 8,
    // },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

});

export default styles;
