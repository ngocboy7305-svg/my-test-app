import TaskCard from "@/components/_Button/TaskCard";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { Task } from "@/type/Task";
import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
export default function TasksScreen() {
    const tasks: Task[] = [
        {
            id: 1,
            title: "Học React Native",
            description: "Học React Native từ cơ bản đến nâng cao",
            priority: "High",
            completed: false,
            deadline: "2022-12-31",
            createAt: "2022-12-31",
        },
        {
            id: 2,
            title: 'Học FlatList',
            description: 'Tìm hiểu cách hiển thị danh sách',
            priority: 'Medium',
            completed: false,
            deadline: '26/08/2026',
            createAt: '24/08/2026',
        },

        {
            id: 3,
            title: 'Làm project',
            description: 'Tiếp tục app quản lý cá nhân',
            priority: 'Low',
            completed: true,
            createAt: '24/08/2026',
        },
    ];
    return (
        <View style={styles.container}>
            <FlatList
                data={tasks} // lấy danh sách muốn hiển thị
                renderItem={({ item }) => <TaskCard task={item} onPress={() => router.push({
                    pathname: "/task/[id]",
                    params: {
                        id: item.id.toString(),
                        title: item.title
                    },
                })} />} // mỗi item trong danh sách sẽ được hiển thị như thế nào
                keyExtractor={(item) => item.id.toString()} // lấy id của mỗi item để làm key
                contentContainerStyle={styles.list} //Style cho phần nd bên trong Flatlist
                showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
            />
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
    list: {
        padding: 20, //Khoảnh cách giữa ds và mép màn hình
        gap: 12, //Khoảng cách giữa các card với nhau
    },
});
