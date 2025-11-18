import {View, Text, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 25,
          borderBottomWidth: 0.5,
          borderColor: '#ccc',
          marginBottom: 10,
          flex:1
        }}>
        <Image
          source={require('../../../assets/icons/adaptive-icon.jpg')}
          style={{
            width:"100%",
            height: 80,
            marginBottom: 10,
          }}
        />
        <Text style={{fontSize: 16, fontWeight: '600'}}>Nepali Guide Class 10 (SEE) </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
