import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, FontSize, Spacing } from "@/constants/theme";
import { Task } from "@/type/Task";
import AppCard from "./AppCard";

interface TaskCardProps {
    task: Task; // Nhận 1 object Task từ component cha truyền vào
    onPress?: () => void; // Hàm xử lý khi click vào card
}

export default function TaskCard({ task, onPress }: TaskCardProps) {
    return (
        <Pressable onPress={onPress}>
            <AppCard>
                <View style={styles.header}>
                    <Text style={styles.title}>{task.title}</Text>
                    <Text
                        style={[
                            styles.priority,
                            task.priority === 'High' && styles.high,
                            task.priority === 'Medium' && styles.medium,
                            task.priority === 'Low' && styles.low,
                        ]}
                    >
                        {task.priority}
                    </Text>
                </View>
                <Text style={styles.description}>{task.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.status}>{task.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</Text>
                    {task.deadline && (
                        <Text style={styles.deadline}>
                            Hết hạn: {task.deadline}
                        </Text>
                    )}
                </View>
            </AppCard>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: Spacing.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: FontSize.large,
        fontWeight: '600',
        color: Colors.text,
    },
    completed: {
        fontSize: FontSize.medium,
        color: Colors.primary,
    },
    priority: {
        fontSize: FontSize.small,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    high: {
        color: Colors.danger,
    },
    medium: {
        color: Colors.primary,
    },
    low: {
        color: Colors.success,
    },
    description: {
        fontSize: FontSize.medium,
        color: Colors.textSecondary,
        marginTop: Spacing.sm,
    },
    footer: {
        marginTop: Spacing.md,
        gap: Spacing.xs,
    },
    status: {
        fontSize: FontSize.small,
        color: Colors.textSecondary,
    },
    deadline: {
        fontSize: FontSize.small,
        color: Colors.textSecondary,
    },
});