import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {text} from 'foo';

export function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 20) {
      throw new Error('fjkdhkjfhdjk');
    }
  });

  return (
    <>
      <Text>
        App.tsx {count} {text}
      </Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
    </>
  );
}
