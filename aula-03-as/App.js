import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');

  async function salvarNome() {
    try {
      await AsyncStorage.setItem('nomeUsuario', nome);

      setNomeSalvo(nome);
      setNome('');

      alert('Nome salvo com sucesso!');
    } catch (erro) {
      console.log('Erro ao salvar:', erro);
    }
  }

  async function carregarNome() {
    try {
      const valor = await AsyncStorage.getItem('nomeUsuario');

      if (valor !== null) {
        setNomeSalvo(valor);
      }
    } catch (erro) {
      console.log('Erro ao carregar:', erro);
    }
  }

  async function removerNome() {
    try {
      await AsyncStorage.removeItem('nomeUsuario');

      setNomeSalvo('');

      alert('Nome removido!');
    } catch (erro) {
      console.log('Erro ao remover:', erro);
    }
  }

  useEffect(() => {
    carregarNome();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        AsyncStorage
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Button
        title="Salvar nome"
        onPress={salvarNome}
      />

      <Text style={styles.nome}>
        Nome salvo: {nomeSalvo || 'Nenhum'}
      </Text>

      <Button
        title="Remover nome"
        onPress={removerNome}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },

  nome: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
});
