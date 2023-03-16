import type { ViewStyle, TextStyle } from 'react-native';

export interface IEmojiItem {
  category: number;
  emoji: string;
  tags: string[];
  description: string;
}

export interface EmojiListProps {
  onSelectEmoji?: (name: string) => void;
  searchEmoji?: string;
  numberOfColumns?: number;
  emojiSize?: number;
  emojiBoxStyle?: ViewStyle;
  emojiListStyle?: ViewStyle;
  sectionSelectedIndex?: number;
  sectionsList?: string[];
  sectionNode?: React.ReactNode;
  sectionsStyle?: ViewStyle;
  sectionsTextStyle?: TextStyle;
  sectionsTextContainerStyle?: ViewStyle;
}
