import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.small,
        marginHorizontal: 4,
    },

    headertitle: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: COLORS.shadeBlack,
    },

    componenttitle: {
        fontSize: 30,
        fontWeight: '600',
        color: COLORS.secondary,
        marginBottom: SIZES.medium,
        textAlign: 'center',
    },

    cardContainer: {
        width: "100%",
        // paddingVertical: SIZES.medium,
        // paddingHorizontal: SIZES.medium,
        borderRadius: 9,
        marginVertical: 10,
        // backgroundColor: COLORS.lightWhite,
    },

    card: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: SIZES.medium,
        marginBottom: SIZES.medium,
    },

    cardText: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: '500',
        color: COLORS.secondary,
    },

    btnContainer: {
        display: 'block',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: SIZES.small,
        width: '100%',
        gap: 15,

    },

    button: {
        // flex: 1,
        backgroundColor: COLORS.tertiary,
        // borderRadius: 8,
        // marginVertical: 6,
        width: '100%',
        width: 130,
        height: 48,
        borderRadius: 10,
        padding: 5,
        margin: 'auto',
        marginVertical: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 13,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1,
    },
});

export default styles;
