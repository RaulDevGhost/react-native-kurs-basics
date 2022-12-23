import React from 'react';
import { TextInput, Button, View } from 'react-native';

export default function LoginForm() {
  const test = () => {
    console.log('Enviado');
  };
  return (
    <View>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Contraseña' />
      <Button title='Enviar' onPress={() => test()} />
    </View>
  );
}
