import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EMOJI_DB from '../../db/EmojiDB';
import type { EmojiListProps } from 'src/types';

const EmojiList = ({
  width,
  height,
  numberOfColumns = 3,
  onSelectEmoji,
}: EmojiListProps) => {
  const renderEmoji = ({ item }) => {
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
