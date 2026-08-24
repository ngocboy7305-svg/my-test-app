import Loading from "@/components/_Button/Loading";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function TasksScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Công việc</Text>
            <Loading />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding: Spacing.lg,
    },
    title: {
        fontSize: FontSize.title,
        fontWeight: '700',
        color: Colors.text,
        marginBottom: Spacing.md,
    },
});
