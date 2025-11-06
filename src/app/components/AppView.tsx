import React from 'react';
import {View, ViewStyle} from 'react-native';

type AppViewProps = {
  isNewView?: boolean;
  flexDirection?: 'row' | 'column';
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

const AppView: React.FC<AppViewProps> = ({
  isNewView = true,
  children,
  flexDirection = 'column',
  style,
}) => {
  const baseStyle: ViewStyle = {
    marginBottom: isNewView ? 40 : 0,
    flexDirection,
  };

  return <View style={[baseStyle, style]}>{children}</View>;
};

export default AppView;
