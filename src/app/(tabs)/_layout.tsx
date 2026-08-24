import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="tasks" options={{ title: "Công việc" }} />
      <Tabs.Screen name="expenses" options={{ title: "Chi tiêu" }} />
      <Tabs.Screen name="statistics" options={{ title: "Thống kê" }} />
    </Tabs>
  );
}