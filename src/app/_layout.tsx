import {Stack} from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import '../../global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          animation: 'slide_from_right',
        }}>
        {/* Drawer Navigator */}
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />

        {/* Dynamic Chapter Screen */}
        <Stack.Screen
          name="chapter/[id]"
          options={({route}) => {
            const params = route.params as {title?: string; chapterNo?: string};
            const title = params?.title || 'Chapter';
            const chapterNo = params?.chapterNo || '';

            return {
              headerTitle: `${title} ${chapterNo ? `(पाठ - ${chapterNo})` : ''}`,
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: '600',
              },
              animation: 'slide_from_right',
              headerShadowVisible:true,
            };
          }}
        />

        {/* Dynamic Old Question Screen */}
        <Stack.Screen
          name="oldQuestion/[year]"
          options={({route}) => {
            const params = route.params as {year?: string};

            const year = params?.year || '2082';

            return {
              headerTitle: `SEE Model Question ${year}`,
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: '600',
              },
              animation: 'slide_from_right',
              headerShadowVisible: true,
            };
          }}
        />

        {/* 404 / Not Found Fallback */}
        <Stack.Screen
          name="+not-found"
          options={{
            title: 'Page Not Found',
            headerTitleStyle: {fontSize: 18, fontWeight: '600'},
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
