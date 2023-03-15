import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { EmojiList } from 'react-native-super-emojis';

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState('');
  const [searchIcon, setSearchIcon] = useState('');
  const [sectionIndex, setSectionIndex] = useState(0);
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
      <View style={styles.searchBackground}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            placeholder="Search Icon..."
            value={searchIcon}
            onChangeText={setSearchIcon}
          />
        </View>
      </View>
      <EmojiList
        sectionsList={sections}
        onSelectEmoji={(emoji) => setSelectedIcon(emoji)}
        numberOfColumns={4}
        searchEmoji={searchIcon}
        emojiSize={40}
        sectionSelectedIndex={sectionIndex}
        emojiBoxStyle={styles.emojiBoxStyle}
        sectionsTextContainerStyle={styles.sectionsTextContainerStyle}
        sectionsTextStyle={styles.sectionsTextStyle}
        emojiListStyle={styles.emojiListStyle}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => setSectionIndex(0)}>
          <Text>😀</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(1)}>
          <Text>🖐️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(2)}>
          <Text>🐶</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(3)}>
          <Text>🍏</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(4)}>
          <Text>🌍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(5)}>
          <Text>⚽️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(6)}>
          <Text>🖥️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(7)}>
          <Text>⚠️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionIndex(8)}>
          <Text>🇧🇷</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emojiListStyle: {
    width: 300,
    height: 400,
  },
  bottomContainer: {
    width: 300,
    marginTop: 10,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  sectionsTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionsTextContainerStyle: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  emojiBoxStyle: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBackground: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBar: {
    backgroundColor: 'lightgray',
    width: 300,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 20,
  },

  textInput: {
    width: '80%',
    marginLeft: 20,
  },

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
