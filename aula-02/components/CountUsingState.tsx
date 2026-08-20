import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  return (
    <View>
      <Text>Valor atual: {contador}</Text>

      <Button
        title="Aumentar"
        onPress={aumentarContador}
      />
    </View>
  );
}
