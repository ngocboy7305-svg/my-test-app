import { Colors, FontSize, Spacing } from "@/constants/theme";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type AppInputProps = TextInputProps & {
    label?: string; // Hiển thị phía trên ô nhập
}

export default function AppInput({
    label,
    ...props
}: AppInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, props.style]}
                placeholderTextColor={Colors.textSecondary}
                {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // gap: Spacing.xs,
    },
    label: {
        fontSize: FontSize.medium,
        fontWeight: '600',
        color: Colors.text,
    },
    input: {
        height: 52,
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: Spacing.md,
        fontSize: FontSize.medium,
        color: Colors.text,
        backgroundColor: Colors.white,
    },
});