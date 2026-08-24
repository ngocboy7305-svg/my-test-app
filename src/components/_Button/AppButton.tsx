import { Colors, FontSize, Spacing } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
    title: string; // Nội dung hiển thị trên button
    onPress: () => void; // Hàm được gọi khi user bấm nút
    disabled?: boolean; // Cho phép khóa button, ? nghĩa là không bắt buộc truyền
};

export default function AppButton({ title, onPress, disabled }: AppButtonProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,//Khi đang nhấn nút thì button áp dùng styles này
                disabled && styles.disabled //Khi button bị khóa thì áp dùng styles này
            ]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary, // Màu nền nút
        paddingVertical: Spacing.md, // KHoảng cách trên dưới
        paddingHorizontal: Spacing.lg, // Khoảng cách trái phải
        borderRadius: 10, // Bo góc nút
        alignItems: 'center', // Căn giữa theo chiều ngang
        justifyContent: 'center', // Căn giữa theo chiều dọc
    },
    pressed: {
        opacity: 0.7, // Làm button mờ khi đang nhấn vào nút
    },
    disabled: {
        opacity: 0.5, //Làm button mờ đi khi bị khóa
    },
    text: {
        fontSize: FontSize.medium,
        fontWeight: '700',
        color: Colors.white,
    },
});