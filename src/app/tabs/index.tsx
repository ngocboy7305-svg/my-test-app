import AppButton from "@/components/_Button/AppButton";
import AppInput from "@/components/_Button/AppInput";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState('');
  const handlePress = () => {
    console.log('Bạn đã bấm vào nút Home');
  }
  return (
    <View style={styles.container}>
      <AppInput
        label="Họ tên:" placeholder="Nhập họ và tên"
        value={name}
        onChangeText={setName}
      />
      <AppButton title="Xác nhận" onPress={handlePress}
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
  },
  title: {
    fontSize: FontSize.title, //Kích thước chữ
    fontWeight: '700', //Độ đậm của chữ
    color: Colors.text, // Màu chữ từ theme
    marginBottom: Spacing.md, // Lấy khoảng trắng từ theme
  }
});