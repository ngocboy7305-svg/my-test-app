import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import AppButton from '@/components/_Button/AppButton';
import AppInput from '@/components/_Button/AppInput';
import { Colors, FontSize, Spacing } from '@/constants/theme';

export default function AddScreen() {
    const { type } = useLocalSearchParams<{ type: 'task' | 'expense' }>();

    // Lưu dữ liệu người dùng nhập
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const isTask = type === 'task'; // Kiểm tra đang ở chế độ Task hay không

    const handleSubmit = () => {
        if (isTask) {
            if (!title.trim()) {
                Alert.alert('Thông báo', 'Vui lòng nhập tên công việc');
                return;
            }

            console.log({
                type: 'task',
                title,
                description,
            });

            Alert.alert('Thành công', 'Đã thêm công việc');
            return;
        }

        // Chưa xử lý Expense ở task này
        console.log('Expense mode');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {isTask ? 'Thêm công việc' : 'Thêm chi tiêu'}
            </Text>

            {isTask ? (
                <>
                    <AppInput
                        label="Tên công việc"
                        placeholder="Nhập tên công việc"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <AppInput
                        label="Mô tả"
                        placeholder="Nhập mô tả"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />
                </>
            ) : (
                <AppInput
                    label="Số tiền"
                    placeholder="Nhập số tiền"
                    keyboardType="numeric"
                    value={title}
                    onChangeText={setTitle}
                />
            )}

            <AppButton
                title={isTask ? 'Thêm công việc' : 'Thêm chi tiêu'}
                onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Cho màn hình chiếm toàn bộ không gian
        backgroundColor: Colors.background, // Màu nền
        padding: Spacing.lg, // Khoảng cách với mép màn hình
        gap: Spacing.md, // Khoảng cách giữa các phần tử
    },

    title: {
        fontSize: FontSize.title, // Kích thước tiêu đề
        fontWeight: '700', // Độ đậm của chữ
        color: Colors.text, // Màu chữ
        marginBottom: Spacing.md, // Khoảng cách phía dưới
    },
});