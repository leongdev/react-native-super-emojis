# React Native Super Emoji

A react native library to render all current emojis, on any size

## Installation

```sh
npm install react-native-super-emojis
```

## Usage

```js
import { EmojiList } from 'react-native-super-emojis';

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

const [emojiName, setEmojiName] = useState('')

<EmojiList
  sectionsList={sections}
  numberOfColumns={7}
  searchEmoji={emojiName}
/>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
