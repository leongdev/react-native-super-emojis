import React from 'react';
import { Text, FlatList } from 'react-native';
import EMOJI_DB from '../../db/EmojiDB';
import type { EmojiListProps } from 'src/types';

const EmojiList = ({ numberOfColumns = 3 }: EmojiListProps) => {
  const renderEmoji = ({ item }: { item: any }) => {
    return <Text>{item.emoji}</Text>;
  };

  return (
    <FlatList
      data={EMOJI_DB}
      numColumns={numberOfColumns}
      keyExtractor={(_, index) => `${index}`}
      renderItem={renderEmoji}
    />
  );
};

export default EmojiList;
