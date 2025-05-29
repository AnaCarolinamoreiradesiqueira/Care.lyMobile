import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();

  // Dados mockados do usuário
  const user = {
    nome: 'Carolina Moreira',
    email: 'carolina.trabalho94@gmail.com',
    descricao: 'Apaixonada por ajudar comunidades e engajada em causas sociais.',
  };

  const inscricoes = [
    {
      title: 'Mães Pela Vida',
      description:
        'Rede de apoio para mães solo em situação de vulnerabilidade, com oficinas profissionalizantes e auxílio psicológico.',
    },
    {
      title: 'Tecendo Futuro',
      description:
        'Projeto que oferece aulas de tecnologia e empreendedorismo para adolescentes de escolas públicas.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <Text style={styles.title}>Perfil de {user.nome}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Cadastrais</Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Nome:</Text> {user.nome}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Email:</Text> {user.email}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre o Perfil</Text>
        <Text style={styles.text}>{user.descricao}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Iniciativas Inscritas</Text>
        {inscricoes.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f2937',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111827',
  },
  label: {
    fontWeight: 'bold',
    color: '#374151',
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 6,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#4b5563',
  },
});

export default Perfil;

