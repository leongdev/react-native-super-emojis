export interface IEmojiItem {
  category: string;
  emoji: string;
  tags: string[];
  description: string;
}

export interface EmojiListProps {
  width?: number;
  height?: number;
  numberOfColumns?: number;
  onSelectEmoji?: (name: string) => void;
}
