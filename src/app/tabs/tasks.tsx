import { StyleSheet, Text, View } from "react-native";

export default function TasksScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Công việc</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
});
