import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-4xl p-6 animate-bounce">
        Hello World
      </Text>
      <StatusBar style="light" />
    </View>
  )
}