import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Importando os tipos de navegação

// Tipando o navigation corretamente
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

interface Props {
  navigation: LoginScreenNavigationProp;
}



const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [id, setId] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.100.7:8000/login/", {
        id,
        cpf,
      });

      if (response.status === 200) {
        // Login bem-sucedido, vai para a HomeScreen
        navigation.navigate("Home", {
          usuarioId: response.data.usuario_id,
          matricula: response.data.matricula,
        });
      } else {
        Alert.alert("Erro", response.data.message || "Login falhou");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Usuário ou CPF inválido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
