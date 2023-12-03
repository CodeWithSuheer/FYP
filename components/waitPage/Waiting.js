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
        marginTop: 30,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.shadeBlack,
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



});

export default styles;
