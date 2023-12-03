import { StyleSheet } from "react-native";

import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
    },

    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },

    upperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: SIZES.small,
    },

    lowerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: SIZES.medium * 2,
        marginTop: SIZES.medium,
    },

    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: COLORS.shadeBlack,
    },

    description: {
        fontSize: 18,
        width: '84%',
        justifyContent: 'center',
        textAlign: 'center',
        color: COLORS.secondary,
        marginTop: SIZES.medium,

    },
    headingOne: {
        fontSize: 35,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    headingTwo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    button: {
        backgroundColor: COLORS.tertiary,
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginVertical: 7,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 20,
        letterSpacing: 1,
        textTransform: "uppercase",
        // fontWeight: 'bold',
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
