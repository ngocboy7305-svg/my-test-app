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
    backgroundColor: '#F5F5F5', // Màu nền của màn hình
  },
  title: {
    fontSize: 24, //Kích thước chữ
    fontWeight: '700', //Độ đậm của chữ
  }
});