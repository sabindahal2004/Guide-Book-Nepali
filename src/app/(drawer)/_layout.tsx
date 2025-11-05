import {Drawer} from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons';
import {Alert} from 'react-native';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'semibold',
          textAlign: 'center',
        },
        headerTintColor: '#000',
        drawerLabelStyle: {
          fontSize: 16,
        },
        headerShadowVisible: false,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Nepali Guide Book (SEE)',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={color}
            />
          ),
          drawerLabel: 'Home',
          drawerStyle: {
            width: '70%',
          },
          headerRight() {
            return (
              <Ionicons
                name="information-circle-outline"
                size={24}
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
          title: 'About Us',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={
                focused ? 'information-circle' : 'information-circle-outline'
              }
              size={20}
              color={color}
            />
          ),
          drawerLabel: 'About Us',
        }}
      />

      <Drawer.Screen
        name="privacyPolicy"
        options={{
          title: 'Privacy Policy',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'document' : 'document-outline'}
              size={20}
              color={color}
            />
          ),
          drawerLabel: 'Privacy Policy',
        }}
      />
      <Drawer.Screen
        name="moreApps"
        options={{
          title: 'More Apps',
          drawerIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'apps' : 'apps-outline'}
              size={20}
              color={color}
            />
          ),
          drawerLabel: 'More Apps',
        }}
      />
    </Drawer>
  );
}
