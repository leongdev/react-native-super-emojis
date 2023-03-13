import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { EmojiList } from 'react-native-super-emojis';

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState('');
  const sections = [
    'Smileys & Emotion',
    'People & Body',
    'Animals & Nature',
    'Food & Drink',
    'Travel & Places',
    'Activities',
    'Objects',
    'Symbols',
    'Flags',
  ];
  return (
    <View style={styles.container}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{selectedIcon}</Text>
      </View>

      <EmojiList
        sectionsList={sections}
        onSelectEmoji={(emoji) => setSelectedIcon(emoji)}
        numberOfColumns={7}
        searchEmoji="tear"
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
