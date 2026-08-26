import { initDatabase } from '@/database/database';
import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
    useEffect(() => {
        initDatabase();
    }, []);
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false, // Ẩn header của nhóm tab
                }}
            />
        </Stack>
    );
}