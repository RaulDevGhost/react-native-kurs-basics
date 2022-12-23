import React from 'react';
import { View, Text } from 'react-native';

export default function SayHello(props) {
  const { name, andere = 'Mr.' } = props;
  const { age, gender } = props;

  return (
    <View>
      <Text>
        Hello {andere} {name}
      </Text>
      <Text>Age: {age}</Text>
      <Text> Gender: {gender}</Text>
    </View>
  );
}

//defaultProps
SayHello.defaultProps = {
  age: 18,
  gender: 'Male',
};
