import TaskCard from "@/components/_Button/TaskCard";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { Task } from "@/type/Task";
import { StyleSheet, View } from "react-native";
export default function TasksScreen() {
    const task: Task = {
        id: 1,
        title: "Học React Native",
        description: "Học React Native từ cơ bản đến nâng cao",
        priority: "High",
        completed: false,
        deadline: "2022-12-31",
        createAt: "2022-12-31",
    }
    return (
        <View style={styles.container}>
            <TaskCard task={task} />
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
