import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import api from "../api"; // Importa a instância Axios
import { Semestre } from "../types"; // Importa a tipagem do modelo Semestre

const SemestreScreen: React.FC = () => {
  const [semestres, setSemestres] = useState<Semestre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSemestres = async () => {
      try {
        const response = await api.get<Semestre[]>("/semestres/"); // Endpoint para buscar os semestres
        setSemestres(response.data);
      } catch (error) {
        console.error("Erro ao buscar semestres:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSemestres();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Carregando semestres...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadeiras</Text>
      <FlatList
        data={semestres}
        keyExtractor={(item) => `${item.usuario}-${item.semestre}-${item.dia_semana}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>
              <Text style={styles.label}>Dia:</Text> {item.dia_semana}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Cadeira:</Text> {item.cadeira}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Semestre:</Text> {item.semestre}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SemestreScreen;
