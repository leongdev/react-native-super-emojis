import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { EmojiList } from 'react-native-super-emojis';

export default function App() {
  return (
    <View style={styles.container}>
      <EmojiList numberOfColumns={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
