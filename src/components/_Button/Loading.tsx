import { Colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoadingProps = {
    visible?: boolean; //Có hiển thị loading hay không
}

export default function Loading({ visible = true }: LoadingProps) {
    if (!visible) return null;
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});