import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import RateUsModal from '../components/RateUsModal';

export default function DrawerLayout() {
  const [showRateUsModal, setShowRateUsModal] = useState(false);

  return (
    <>
      <Drawer
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
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
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={18}
                color={color}
              />
            ),
            drawerLabel: 'Home',
            headerRight: () => (
              <Ionicons
                name="star-outline"
                size={24}
                color="orange"
                style={{ marginRight: 15 }}
                onPress={() => setShowRateUsModal(true)} 
              />
            ),
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            title: 'About Us (हाम्रो बारेमा)',
            drawerActiveTintColor: '#2a9d8f',
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused
                    ? 'information-circle'
                    : 'information-circle-outline'
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
            drawerIcon: ({ color, focused }) => (
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

      {/* ✅ Modal rendered globally, not inside headerRight */}
      <RateUsModal
        visible={showRateUsModal}
        onClose={() => setShowRateUsModal(false)}
      />
    </>
  );
}
