import React from 'react';
import { Text, FlatList, Pressable, StyleSheet, View } from 'react-native';
import EMOJI_DB from '../../db/EmojiDB';
import type { EmojiListProps } from 'src/types';
import type { ListRenderItem } from 'react-native';
import type { IEmojiItem } from '../../types/index';

const EmojiList = ({ numberOfColumns = 6, onSelectEmoji }: EmojiListProps) => {
  const renderEmoji: ListRenderItem<IEmojiItem> = ({ item }) => {
    return (
      <Pressable
        onPress={() => onSelectEmoji && onSelectEmoji(item.emoji)}
        style={({ pressed }) => [
          styles.buttonContainer,
          { opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <Text style={styles.iconText}>{item.emoji}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.iconListContainer}>
      <FlatList
        data={EMOJI_DB}
        numColumns={numberOfColumns}
        keyExtractor={(_, index) => `${index}`}
        renderItem={renderEmoji}
      />
    </View>
  );
};

export default EmojiList;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 2,
    marginVertical: 2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    fontSize: 20,
  },

  iconListContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
