import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { EmojiList } from 'react-native-super-emojis';

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{selectedIcon}</Text>
      </View>

      <EmojiList
        numberOfColumns={6}
        onSelectEmoji={(emoji) => setSelectedIcon(emoji)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiText: {
    fontSize: 40,
  },

  emojiContainer: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
});
