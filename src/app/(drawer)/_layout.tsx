import {Drawer} from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons';
import {Alert} from 'react-native';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'semibold',
          textAlign: 'center',
        },
        headerTintColor: '#000',
        drawerLabelStyle: {
          fontSize: 16,
        },
        headerShadowVisible: false,
        drawerStyle: {
          width: '70%',
        },
      }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Nepali Guide Book (SEE)',
          drawerActiveTintColor: '#457b9d',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={18}
              color={color}
            />
          ),
          drawerLabel: 'Home',
          headerRight() {
            return (
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#000"
                style={{marginRight: 15}}
                onPress={() =>
                  Alert.alert('Demo Click', 'More features coming soon!')
                }
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: 'About Us (हाम्रो बारेमा)',
          drawerActiveTintColor: '#2a9d8f',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              size={18}
              color={color}
            />
          ),
          drawerLabel: 'About Us (हाम्रो बारेमा)',
        }}
      />

      <Drawer.Screen
        name="privacyPolicy"
        options={{
          title: 'Privacy Policy (गोपनीयता नीति)',
          drawerActiveTintColor: '#e76f51',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'document' : 'document-outline'}
              size={18}
              color={color}
            />
          ),
          drawerLabel: 'Privacy Policy',
        }}
      />
    </Drawer>
  );
}
