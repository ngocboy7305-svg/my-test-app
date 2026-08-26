import AppButton from "@/components/_Button/AppButton";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
export default function TaskDetailScreen() {
    const { id, title } = useLocalSearchParams<{ id: string, title: string }>();
    const handleDelete = () => {
        Alert.alert(
            'Xóa công việc',
            'Bạn có chắc chắn muốn xóa công việc này?',
            [
                { text: 'Hủy', style: 'cancel' },
                { text: 'Xóa', style: 'destructive', onPress: () => { router.back(); } }
            ]
        );
    };
    const [completed, setCompleted] = useState(false);
    return (
        <>
            <Stack.Screen options={{ title: title }} />
            <View style={styles.container}>
                <Text style={styles.title}>Chi tiết công việc</Text>
                <Text style={styles.label}>{title}</Text>

                <AppButton
                    title="Sửa công việc"
                    onPress={() => router.push({
                        pathname: '/add/[type]',
                        params: {
                            type: 'task',
                            mode: 'edit',
                            id
                        }
                    })}
                />
                <AppButton
                    title={completed ? "Chưa hoàn thành" : "Hoàn thành"}
                    onPress={() => setCompleted(!completed)}
                />
                <AppButton
                    title="Xóa công việc"
                    onPress={handleDelete}
                />
            </View>
        </>
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
    complete: {
        color: Colors.success,
        fontWeight: '600'
    },
    incomplete: {
        color: Colors.danger,
        fontWeight: '600'
    }
});