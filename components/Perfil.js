import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();

  const user = {
    nome: 'Carolina Moreira',
    email: 'carolina.trabalho94@gmail.com',
    descricao: 'Apaixonada por ajudar comunidades e engajada em causas sociais.',
    foto: 'https://i.pravatar.cc/150?img=47', // imagem de perfil temporária
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

  const handleEditarPerfil = () => {
    console.log('Editar perfil clicado');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.profileCard}>
        <Image source={{ uri: user.foto }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{user.nome}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
        </View>
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
      <View style={styles.buttonRow}>
       <TouchableOpacity style={styles.editButton} onPress={handleEditarPerfil}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.deleteButton} onPress={handleEditarPerfil}>
        <Text style={styles.editButtonText}>Excluir Perfil</Text>
      </TouchableOpacity>
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 12, 
  marginBottom: 20,
},
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  backButtonText: {
    color: '#1f2937',
    fontSize: 14,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  editButton: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#3b82f6',
  },
    deleteButton: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

export default Perfil;
