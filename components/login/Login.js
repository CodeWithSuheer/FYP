import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.xxLarge,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 15,
    },
    image: {
        height: 350,
        width: "100%",
    },

    
});

export default styles;
