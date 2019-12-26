import React from 'react';
// import { View } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

// import { Container } from './styles';

export default function signIn() {
  return (
    <Background>
      <Input
        style={{ marginTop: 90 }}
        icon="call"
        placeholder="digite algo aqui porra"
      />
      <Button>Carregar</Button>
    </Background>
  );
}
