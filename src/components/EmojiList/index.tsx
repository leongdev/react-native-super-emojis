import React from 'react';
import { Text, FlatList, Pressable, StyleSheet, View } from 'react-native';
import EMOJI_DB from '../../db/EmojiDB';
import type { EmojiListProps } from 'src/types';
import type { ListRenderItem } from 'react-native';
import type { IEmojiItem } from '../../types/index';

const EmojiList = ({
  numberOfColumns = 6,
  onSelectEmoji,
  sectionSelectedIndex,
  sectionsList,
  sectionNode,
  sectionsStyle,
  sectionsTextStyle,
  sectionsTextContainerStyle,
  searchEmoji,
  emojiBoxStyle,
  emojiSize,
  emojiListStyle,
}: EmojiListProps) => {
  const renderEmoji: ListRenderItem<IEmojiItem> = ({ item }) => {
    return (
      <Pressable
        onPress={() => onSelectEmoji && onSelectEmoji(item.emoji)}
        style={({ pressed }) => [
          styles.buttonContainer,
          { opacity: pressed ? 0.5 : 1 },
          emojiBoxStyle,
        ]}
      >
        <Text style={[styles.iconText, { fontSize: emojiSize || 20 }]}>
          {item.emoji}
        </Text>
      </Pressable>
    );
  };

  const renderSections: ListRenderItem<any> = ({ item, index }) => {
    const EMOJIS = EMOJI_DB.filter((emoji) => emoji.category === index);

    return (
      <View style={sectionsStyle}>
        <View style={sectionsTextContainerStyle}>
          <Text style={sectionsTextStyle}>{item}</Text>
          {sectionNode && sectionNode}
        </View>
        <FlatList
          key={numberOfColumns}
          data={EMOJIS}
          numColumns={numberOfColumns}
          keyExtractor={(_, i) => `${i}`}
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
      emoji.description.includes(searchEmoji.toLowerCase())
    );

    return (
      <View style={[styles.emojiListContainer, emojiListStyle]}>
        <FlatList
          key={numberOfColumns}
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

  if (sectionSelectedIndex !== undefined && sectionsList) {
    const EMOJIS = EMOJI_DB.filter(
      (emoji) => emoji.category === sectionSelectedIndex
    );
    return (
      <View style={sectionsStyle}>
        <View style={sectionsTextContainerStyle}>
          <Text style={sectionsTextStyle}>
            {sectionsList[sectionSelectedIndex]}
          </Text>
          {sectionNode && sectionNode}
        </View>
        <View style={[styles.emojiListContainer, emojiListStyle]}>
          <FlatList
            key={numberOfColumns}
            data={EMOJIS}
            numColumns={numberOfColumns}
            keyExtractor={(_, i) => `${i}`}
            renderItem={renderEmoji}
            bounces={false}
            alwaysBounceVertical={false}
            alwaysBounceHorizontal={false}
          />
        </View>
      </View>
    );
  }

  if (sectionsList) {
    if (sectionsList.length > 9) {
      throw new Error('You can only have 9 sections');
    }

    return (
      <View style={[styles.emojiListContainer, emojiListStyle]}>
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
    <View style={[styles.emojiListContainer, emojiListStyle]}>
      <FlatList
        key={numberOfColumns}
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

  emojiListContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
