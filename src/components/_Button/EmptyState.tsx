import { Colors, FontSize, Spacing } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
    title?: string; // Tiêu đề khi không có dữ liệu
    message?: string; // Nội dung hiển thị

}

export default function EmptyState({ title, message }: EmptyStateProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {message &&
                <Text style={styles.message}>{message}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.xl,
    },
    title: {
        fontSize: FontSize.large,
        fontWeight: '700',
        color: Colors.text,
        textAlign: 'center',
    },
    message: {
        marginTop: Spacing.sm,
        fontSize: FontSize.medium,
        color: Colors.textSecondary,
        textAlign: 'center'
    },
});