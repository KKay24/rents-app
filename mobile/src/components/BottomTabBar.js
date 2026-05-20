import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabs = [
  { key: 'home', title: 'Home', icon: 'home' },
  { key: 'search', title: 'Search', icon: 'search' },
  { key: 'saved', title: 'Saved', icon: 'heart' },
  { key: 'messages', title: 'Messages', icon: 'message-square' },
  { key: 'profile', title: 'Profile', icon: 'user' },
];

export default function BottomTabBar({ activeKey, onChange }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12), paddingTop: 12 }]}>
      {tabs.map((tab) => {
        const isActive = activeKey === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
            activeOpacity={0.7}
          >
            <Feather
              name={tab.icon}
              size={24}
              color={isActive ? '#27ae60' : '#888'}
            />
            <Text
              style={[
                styles.label,
                { color: isActive ? '#27ae60' : '#888' },
                isActive && styles.activeLabel,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '700',
  },
});

