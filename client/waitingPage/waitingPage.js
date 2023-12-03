import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from '../../constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.xxLarge,
        marginBottom: SIZES.medium,
    },
    bodyContainer: {
        width: '90%',
        margin: 'auto',
        marginTop: 50,
        justifyContent: 'flex-start',
    },
    headerContainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    instruction: {
        width: "85%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        margin: 'auto'
    },

    instruction_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.shadeBlack,
    },

    instruction_text: {
        marginTop: 8,
        fontSize: 18,
        paddingBlock: 2,
    },

    mainContainer: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.shadeBlack,
    },

    headerText: {
        color: COLORS.shadeBlack,
        marginLeft: 15,
        marginTop: 25,
    },

    text: {
        fontSize: 20,
        alignItems: 'start',
        fontWeight: '400',
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'start',
        marginTop: 16,
    },

    homePageContainerTitle: {
        fontSize: 20,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 6,
        fontWeight: '400',
        flex: 1,
        marginLeft: 8,
        marginBottom: 4
    },
    button: {
        backgroundColor: COLORS.tertiary,
        borderRadius: 15,
        marginTop: 25,
        padding: 14,
        alignItems: 'center',
        width: '90%',
    },

    buttonContainer: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        width: '90%',
        marginLeft: 12,
    },

    buttonRequest: {
        backgroundColor: COLORS.tertiary,
        borderRadius: 15,
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
        paddingHorizontal: 12,
        marginTop: 50,
    },
    image: {
        height: 250,
        width: 260,
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
        marginTop: 6,
    },
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
    btnContainer: {
        width: 25,
        height: 25,
        backgroundColor: COLORS.white,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
    instruction_data: {
        marginTop: 30,
    },
});

export default styles;
