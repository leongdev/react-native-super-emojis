import type { ViewStyle, TextStyle } from 'react-native';

export interface IEmojiItem {
  category: number;
  emoji: string;
  tags: string[];
  description: string;
}

export interface EmojiListProps {
  numberOfColumns?: number;
  onSelectEmoji?: (name: string) => void;
  emojiBoxStyle?: ViewStyle;
  emojiSize?: number;
  emojiListStyle?: ViewStyle;
  sectionSelectedIndex?: number;
  sectionsList?: string[];
  sectionsStyle?: ViewStyle;
  sectionsTextStyle?: TextStyle;
  sectionsTextContainerStyle?: ViewStyle;
  sectionNode?: React.ReactNode;
  searchEmoji?: string;
}
