# React Native Super Emoji 🦸‍♂️✨🦸‍♀️✨🦸

A react native library to render all current emojis, on any size!

![Alt Text](https://media.giphy.com/media/ouYnuXx3uXy5hi67bU/giphy.gif)
![Alt Text](https://media.giphy.com/media/BSJ1nHeTIvLhbNW9hz/giphy.gif)

## Features

- Search Emojis:
  - You can search by description
  - Search by tags (coming soon)
- Customizable Sections:
  - Customize section titles or add new elements such as subtitles or any node below the title.
  - Display specific sections or render all icons at once.
- Customizable Columns:
  - You can change the number of columns.
- Hook to get all icons database and build your custom list.
- Select icons.

## Installation

```sh
npm install react-native-super-emojis
```

or

```sh
yarn add react-native-super-emojis
```

## Usage

```ts
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

## Props

| Prop name                    | Description                                      | Type                     | Required | Default     |
| ---------------------------- | ------------------------------------------------ | ------------------------ | -------- | ----------- |
| `onSelectEmoji`              | Function called when the user selects an emoji   | `(name: string) => void` | false    | `undefined` |
| `searchEmoji`                | Define the name of the emoji you are searching   | `string`                 | false    | `undefined` |
| `numberOfColumns`            | Define the number of columns of the emoji matrix | `number`                 | false    | `undefined` |
| `emojiSize`                  | Define the size of all emojis                    | `number`                 | false    | `undefined` |
| `emojiBoxStyle`              | Custom style for the emoji parent view           | `ViewStyle`              | false    |             |
| `emojiListStyle`             | Custom style for the entire emoji list matrix    | `ViewStyle`              | false    |             |
| `sectionSelectedIndex`       | Define the selected section by index             | `number`                 | false    | `undefined` |
| `sectionsList`               | Divide the icons in 9 sections                   | `string[]`               | false    | `undefined` |
| `sectionNode`                | Adds any React Node below the section title      | `ReactNode`              | false    | `undefined` |
| `sectionsStyle`              | Custom style for the section parent view         | `ViewStyle`              | false    |             |
| `sectionsTextStyle`          | Custom style for the section title               | `TextStyle`              | false    |             |
| `sectionsTextContainerStyle` | Custom style for the section title parent view   | `ViewStyle`              | false    |             |

## Hooks

| Hook name    | Description                           | Type                |
| ------------ | ------------------------------------- | ------------------- |
| `useIconsDB` | Hook to return all the icons database | `()=> IEmojiItem[]` |

## Made with ❤️ by [@leongdev](https://leongdev.com/)

✨ `react-native-super-emoji` is a personal project made to be used on my other personal projects and I hope that this small lib can help people with the same problem that I faced developing my apps!

## License

MIT

---
