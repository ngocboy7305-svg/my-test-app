import { Colors, FontSize, Spacing } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TaskDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chi tiết công việc</Text>
            <Text style={styles.label}>ID: {id}</Text>

            <Text>

            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: Spacing.lg,
        gap: Spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: FontSize.title,
        fontWeight: '700',
        color: Colors.text,
    },
    label: {
        fontSize: FontSize.medium,
        color: Colors.textSecondary,
    },
});