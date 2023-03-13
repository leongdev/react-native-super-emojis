import React from 'react';
import { Text, FlatList, Pressable, StyleSheet, View } from 'react-native';
import EMOJI_DB from '../../db/EmojiDB';
import type { EmojiListProps } from 'src/types';
import type { ListRenderItem } from 'react-native';
import type { IEmojiItem } from '../../types/index';

const EmojiList = ({
  numberOfColumns = 6,
  onSelectEmoji,
  sectionsList,
  sectionNode,
  sectionsStyle,
  sectionsTextStyle,
  sectionsTextContainerStyle,
  searchEmoji,
}: EmojiListProps) => {
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

  const renderSections: ListRenderItem<string[]> = ({ item, index }) => {
    const EMOJIS = EMOJI_DB.filter((emoji) => emoji.category === index);

    return (
      <View style={sectionsStyle}>
        <View style={sectionsTextContainerStyle}>
          <Text style={sectionsTextStyle}>{item}</Text>
          {sectionNode && sectionNode}
        </View>
        <FlatList
          data={EMOJIS}
          numColumns={numberOfColumns}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderEmoji}
          bounces={false}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
        />
      </View>
    );
  };

  if (searchEmoji) {
    const EMOJIS = EMOJI_DB.filter((emoji) =>
      emoji.description.includes(searchEmoji)
    );

    return (
      <View style={styles.iconListContainer}>
        <FlatList
          data={EMOJIS}
          numColumns={numberOfColumns}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderEmoji}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          bounces={false}
        />
      </View>
    );
  }

  if (sectionsList) {
    if (sectionsList.length > 9) {
      throw new Error('You can only have 9 sections');
    }

    return (
      <View style={styles.iconListContainer}>
        <FlatList
          data={sectionsList}
          keyExtractor={(_, index) => `${index}`}
          renderItem={renderSections}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          bounces={false}
        />
      </View>
    );
  }

  return (
    <View style={styles.iconListContainer}>
      <FlatList
        data={EMOJI_DB}
        numColumns={numberOfColumns}
        keyExtractor={(_, index) => `${index}`}
        renderItem={renderEmoji}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        bounces={false}
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
