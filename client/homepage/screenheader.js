import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
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
});

export default styles;
