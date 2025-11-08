import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

type CardProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  title?: string;
  nepaliTitle?: string;
  description?: string;
  customBgColor?: string;
  flexDirection?: 'row' | 'column';
  containerStyle?: any;
  onPress?: () => void;
  disabled?: boolean;
  minHeight?: number;
  iconSize?: number;
  fontSize?: string;
};

const Card: React.FC<CardProps> = ({
  icon,
  title,
  nepaliTitle,
  description,
  customBgColor = '#e63946',
  flexDirection = 'row',
  containerStyle,
  onPress,
  disabled = false,
  minHeight = 140,
  iconSize = 65,
  fontSize = 'xl',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        {backgroundColor: customBgColor},
        containerStyle,
        {flexDirection, minHeight: minHeight, opacity: disabled ? 0.6 : 1},
      ]}
      className="rounded-xl p-5 items-center justify-center m-2 "
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityHint={description}>
      {/* Icon */}
      {icon && (
        <View
          style={{
            marginRight: flexDirection === 'row' ? 24 : 0,
            marginBottom: flexDirection === 'column' ? 5 : 0,
          }}
          className="items-center justify-center">
          <Ionicons name={icon} size={iconSize} color={'#fff'} />
        </View>
      )}

      {/* Texts */}
      <View
        className={`${flexDirection === 'row' ? 'flex-1' : ''} items-center`}
        style={{
          alignItems: flexDirection === 'column' ? 'center' : 'flex-start',
        }}>
        <View
          className={`${flexDirection === 'column' ? flexDirection : 'flex-row'}`}>
          {title && (
            <>
              <Text
                className={`text-white text-${fontSize} font-bold mb-1`}
                numberOfLines={1}
                style={{
                  textAlign: flexDirection === 'column' ? 'center' : 'left',
                }}>
                {title}
              </Text>

              <Text
                className={`text-white text-${fontSize} font-bold mb-1`}
                numberOfLines={1}
                style={{
                  textAlign: flexDirection === 'column' ? 'center' : 'left',
                }}>
                {nepaliTitle}
              </Text>
            </>
          )}
        </View>
        {description && (
          <Text
            className="text-white text-sm"
            numberOfLines={1}
            style={{
              textAlign: flexDirection === 'column' ? 'center' : 'left',
            }}>
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
