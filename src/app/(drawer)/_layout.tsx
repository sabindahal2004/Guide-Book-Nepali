import {Drawer} from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons';
import {useState} from 'react';
import RateUsModal from '../components/RateUsModal';
import {Share, View} from 'react-native';

export default function DrawerLayout() {
  const [showRateUsModal, setShowRateUsModal] = useState(false);
  const appUrl = 'https://play.google.com/store/apps/details?id=com.tencent.ig';
  const shareMessage = 'Check out this amazing app.';

  const shareApp = async () => {
    try {
      await Share.share({
        message: `${shareMessage} ${appUrl}`,
        url: appUrl,
        title: 'Share App With Friends',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

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
          headerShadowVisible: true,
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
            headerRight: () => (
              <View className="flex-row justify-center items-center">
                <Ionicons
                  name="star"
                  size={24}
                  color="orange"
                  style={{marginRight: 10}}
                  onPress={() => setShowRateUsModal(true)}
                />
                <Ionicons
                  name="share-social"
                  size={24}
                  color="black"
                  style={{marginRight: 12}}
                  onPress={() => shareApp()}
                />
              </View>
            ),
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

      <RateUsModal
        visible={showRateUsModal}
        onClose={() => setShowRateUsModal(false)}
      />
    </>
  );
}
