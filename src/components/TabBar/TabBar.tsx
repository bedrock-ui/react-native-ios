import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { theme } from 'theme';

import type { Props, TabProps } from './TabBar.types';

const tabBarStyles = StyleSheet.create({
  base: {
    backgroundColor: theme.palette.background,
    borderTopColor: theme.palette.neutral[400],
    borderTopWidth: 0.5,
    bottom: 0,
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 52,
    position: 'absolute',
    width: '100%',
  },
});

const tabStyles = StyleSheet.create({
  base: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
  },
});

function TabBar({ children }: Props) {
  return <SafeAreaView style={tabBarStyles.base}>{children}</SafeAreaView>;
}

function Tab({ icon, label = '', labelColor = theme.palette.label, onPress }: TabProps) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={tabStyles.base}>
      {icon}

      {label && <Text style={{ ...tabStyles.label, color: labelColor }}>{label}</Text>}
    </TouchableOpacity>
  );
}

TabBar.Tab = Tab;

export default TabBar;
