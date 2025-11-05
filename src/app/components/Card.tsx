import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type CardProps = {
  icon?: any;
  title?: string;
  description?: string;
  customBgColor?: string;
  flexDirection?: 'row' | 'column';
  containerStyle?: any;
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  customBgColor = '#e63946',
  flexDirection = 'row',
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[{ backgroundColor: customBgColor }, containerStyle]}
      className={`rounded-xl p-5 flex-${flexDirection} items-center justify-center m-2 min-h-[140px]`}
    >
      {/* Icon */}
      <View className={`${flexDirection === 'row' ? 'mr-6' : 'mb-3'} items-center justify-center`}>
        <Ionicons name={icon} size={65} color={'#fff'} />
      </View>

      {/* Texts */}
      <View className="flex-1 items-start ">
        {title && (
          <Text
            className="text-white text-xl font-bold text-center mb-1"
            numberOfLines={2}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            className="text-white text-sm text-center"
            numberOfLines={3}
          >
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
