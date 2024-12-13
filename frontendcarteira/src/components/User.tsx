import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  usuario: Usuario; // Recebe o usuário logado como prop
}

const UsuariosList: React.FC<Props> = ({ usuario }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: usuario.foto }} 
          style={styles.userImage}
        />
        <Text style={styles.name}>{usuario.nome}</Text>
      </View>
      <Text style={styles.text}><Text style={styles.label}>Matrícula:</Text> {usuario.matricula}</Text>
      <Text style={styles.text}><Text style={styles.label}>CPF:</Text> {usuario.cpf}</Text>
      <Text style={styles.text}><Text style={styles.label}>Data de Nascimento:</Text> {usuario.data_nascimento}</Text>
      <Text style={styles.text}><Text style={styles.label}>Semestre:</Text> {usuario.semestre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-start',
        paddingTop: 50, // Espaçamento para dar a impressão de que a imagem está no topo
      },
      card: {
        backgroundColor: '#fff',
        flex: 1, // Faz o card ocupar toda a tela
        justifyContent: 'flex-start',
        padding: 20,
        marginTop: 0,
        marginHorizontal: 10, // Espaço nas laterais
        // Removemos as bordas e a sombra:
        borderRadius: 0,
        elevation: 0,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      headerContainer: {
        alignItems: 'center', // Centraliza a imagem no topo
        marginBottom: 20, // Espaço entre a imagem e o nome
      },
      userImage: {
        width: 150, // Tamanho maior da imagem
        height: 150,
        borderRadius: 75, // Tornar a imagem redonda
        marginBottom: 20, // Espaço entre a imagem e o nome
      },
      name: {
        fontSize: 24, // Tamanho maior do nome
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Espaço entre o nome e os campos abaixo
      },
      text: {
        fontSize: 16,
        marginBottom: 10, // Espaço entre os campos de informação
      },
      label: {
        fontWeight: 'bold',
        color: '#333', // Cor para os labels
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

export default UsuariosList;
