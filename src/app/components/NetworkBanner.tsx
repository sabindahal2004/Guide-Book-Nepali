import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Ionicons} from '@expo/vector-icons';

export default function NetworkBanner() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (isConnected) return null;

  return (
    <View
      style={{
        backgroundColor: 'red',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}>
      <Text style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
        You are offline, Please connect to your internet
      </Text>
      <Ionicons name="wifi" size={13}  color={"white"}/>
    </View>
  );
}
