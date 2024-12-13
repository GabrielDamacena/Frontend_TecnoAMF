import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import api from '../api'; // Instância Axios
import UsuariosList from '../components/User'; // Importando o componente de usuários

interface Usuario {
  id: number;
  matricula: string;
  cpf: string;
  data_nascimento: string;
  semestre: number;
  nome: string;
  foto: string;
}

interface Props {
  route: { params: { usuarioId: number } }; // Tipagem do parâmetro recebido via navegação
}

const HomeScreen: React.FC<Props> = ({ route }) => {
  const { usuarioId } = route.params; // ID do usuário logado
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get<Usuario[]>('/usuarios/'); // Buscar todos os usuários
        setUsuarios(response.data); // Armazenar todos os usuários
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        Alert.alert('Erro', 'Não foi possível carregar as informações do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Carregando informações...</Text>
      </View>
    );
  }

  // Filtrando o usuário logado pelo id
  const usuarioLogado = usuarios.find(usuario => usuario.id === usuarioId);

  if (!usuarioLogado) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuário não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UsuariosList usuario={usuarioLogado} /> {/* Passando o usuário logado para o componente */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
