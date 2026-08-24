import AppButton from "@/components/_Button/AppButton";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppButton
        title="Thêm công việc"
        onPress={() => router.push({ pathname: '/add/[type]', params: { type: 'task' } })}
      />
      <AppButton
        title="Thêm chi tiêu"
        onPress={() => router.push({ pathname: '/add/[type]', params: { type: 'expense' } })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Cho View chiếm toàn bộ không gian màn hình
    justifyContent: 'center', //Căn giữa theo chiều dọc
    alignItems: 'center', //Căn giữa theo chiều ngang
    backgroundColor: Colors.background, // Màu nền của màn hình
    padding: Spacing.md, // Lấy khoảng trắng từ theme
    gap: 20,
  },
  title: {
    fontSize: FontSize.title, //Kích thước chữ
    fontWeight: '700', //Độ đậm của chữ
    color: Colors.text, // Màu chữ từ theme
    marginBottom: Spacing.md, // Lấy khoảng trắng từ theme
  }
});