import { Colors, Spacing } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
  },
  title: {
    fontSize: 24, //Kích thước chữ
    fontWeight: '700', //Độ đậm của chữ
    color: Colors.text, // Màu chữ từ theme
    marginBottom: Spacing.md, // Lấy khoảng trắng từ theme
  }
});