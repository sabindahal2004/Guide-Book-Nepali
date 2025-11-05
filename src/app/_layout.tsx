import {Stack} from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import '../../global.css';
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack>
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
            headerShadowVisible:false,
          }}
        />
        <Stack.Screen name="chapter/[id]" />
        <Stack.Screen name="+not-found" options={{title: 'Page Not Found', animation:"slide_from_right"}} />
      </Stack>
    </GestureHandlerRootView>
  );
}
