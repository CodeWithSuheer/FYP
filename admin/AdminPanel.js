import { StyleSheet } from "react-native";

import { COLORS, SIZES } from '../constants/theme';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
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
        height: 250,
        width: 260,
    },

    headercontainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
        paddingTop: SIZES.medium,
    },

    headertitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.shadeBlack,
    },

    componenttitle: {
        fontSize: 30,
        fontWeight: '600',
        color: COLORS.secondary,
        marginBottom: SIZES.medium,
    },

    registrationRequestsContainer: {
        width: "90%",
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
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
        fontSize: 40,
        color: COLORS.secondary,
    },
    headingTwo: {
        fontSize: 38,
        color: COLORS.secondary,
    },
    button: {
        backgroundColor: COLORS.tertiary,
        paddingVertical: 12,
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



});

export default styles;
