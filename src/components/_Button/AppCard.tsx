import { Colors, Spacing } from "@/constants/theme";
import { StyleSheet, View, ViewProps } from "react-native";
type AppCardProps = ViewProps & {
    children: React.ReactNode; // Nội dung nằm bên trong Card
}

export default function AppCard({ children, ...props }: AppCardProps) {
    return (
        <View style={[styles.card]} {...props}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%', // chiếm toàn bộ chiều rộng của component cha
        backgroundColor: Colors.white, // Màu nền của card
        borderRadius: 12, // Bo góc của card
        padding: Spacing.md, // Khoảng cách đệm bên trong card
        borderWidth: 1, // Độ rộng của viền
        borderColor: Colors.border, // Màu của viền
    },
});