import EmptyState from "@/components/_Button/EmptyState";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState('');
  const handlePress = () => {
    console.log('Bạn đã bấm vào nút Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Công việc hôm nay</Text>
      <EmptyState
        title="Không có công việc"
        message="Hãy thêm công việc cho ngày hôm nay!" />
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
    fontSize: FontSize.title, //Kích thước chữ
    fontWeight: '700', //Độ đậm của chữ
    color: Colors.text, // Màu chữ từ theme
    marginBottom: Spacing.md, // Lấy khoảng trắng từ theme
  }
});