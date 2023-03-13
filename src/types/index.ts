import type { ViewStyle } from 'react-native';

export interface IEmojiItem {
  category: number;
  emoji: string;
  tags: string[];
  description: string;
}

export interface EmojiListProps {
  numberOfColumns?: number;
  onSelectEmoji?: (name: string) => void;
  sectionsList?: string[];
  sectionsStyle?: ViewStyle;
  sectionsTextStyle?: ViewStyle;
  sectionsTextContainerStyle?: ViewStyle;
  sectionNode?: React.ReactNode;
  searchEmoji?: string;
}
