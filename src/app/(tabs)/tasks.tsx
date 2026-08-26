import AppInput from "@/components/_Button/AppInput";
import TaskCard from "@/components/_Button/TaskCard";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { Task } from "@/type/Task";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
export default function TasksScreen() {
    const [search, setSearch] = useState('');
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
    type TaskFilter = 'all' | 'pending' | 'completed'

    const [filter, setFilter] = useState<TaskFilter>('all');
    const filterTasks = tasks.filter((task) => {
        const matchFilter = filter === 'all' ? true : filter === 'pending' ? !task.completed : task.completed;
        const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });
    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <Pressable
                    style={[styles.filterButton, filter === 'all' && styles.filterButtonActive,]}
                    onPress={() => setFilter('all')}
                >
                    <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>Tất cả</Text>
                </Pressable>
                <Pressable
                    style={[styles.filterButton, filter === 'pending' && styles.filterButtonActive,]}
                    onPress={() => setFilter('pending')}
                >
                    <Text style={[styles.filterText, filter === 'pending' && styles.filterTextActive]}>Đang chờ</Text>
                </Pressable>
                <Pressable
                    style={[styles.filterButton, filter === 'completed' && styles.filterButtonActive,]}
                    onPress={() => setFilter('completed')}
                >
                    <Text style={[styles.filterText, filter === 'completed' && styles.filterTextActive]}>Hoàn thành</Text>
                </Pressable>
            </View>
            <AppInput placeholder="Tìm kiếm công việc..." value={search} onChangeText={setSearch} style={styles.searchInput} />
            <FlatList
                data={filterTasks} // lấy danh sách muốn hiển thị
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
        backgroundColor: Colors.background,
        padding: Spacing.lg,
    },
    searchInput: {
        // marginBottom: Spacing.md,
        borderRadius: 20, // Bo tròn button
        borderColor: Colors.border, // Viền cùng màu với button
        borderWidth: 2, // Độ dày viền
        paddingLeft: 10,
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
    filterContainer: {
        flexDirection: 'row', // Các filter nằm ngang
        gap: Spacing.sm, // Khoảng cách giữa các filter
        paddingHorizontal: Spacing.lg, // Khoảng cách trái phải
        //paddingTop: Spacing.md, // Khoảng cách phía trên
    },

    filterButton: {
        paddingHorizontal: Spacing.md, // Khoảng cách trái phải bên trong button
        paddingVertical: Spacing.sm, // Khoảng cách trên dưới bên trong button
        borderRadius: 20, // Bo tròn button
        backgroundColor: Colors.white, // Màu nền
        borderWidth: 1, // Độ dày viền
        borderColor: Colors.border, // Màu viền
    },

    filterButtonActive: {
        backgroundColor: Colors.primary, // Màu khi filter đang được chọn
        borderColor: Colors.primary, // Viền cùng màu với button
    },

    filterText: {
        fontSize: FontSize.small, // Cỡ chữ
        color: Colors.textSecondary, // Màu chữ thường
    },

    filterTextActive: {
        color: Colors.white, // Chữ trắng khi đang chọn
        fontWeight: '600', // Chữ đậm hơn
    },
});
