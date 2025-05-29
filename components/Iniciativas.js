import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';



 const InitiativeCard = ({ title, description, image, isLoggedIn }) => {
  const handleEnroll = () => {
    if (!isLoggedIn) {
      Alert.alert('Atenção', 'Você precisa estar logado para se inscrever.');
      return;
    }

    Alert.alert('Inscrição', `Você se inscreveu na iniciativa: ${title}`);
  };


  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.paragraph}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={handleEnroll}>
        <Text style={styles.buttonText}>Inscrever-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const partners = [
  {
    title: 'Mães Pela Vida',
    description:
      'Rede de apoio para mães solo em situação de vulnerabilidade, com oficinas profissionalizantes e auxílio psicológico.',
    image: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?auto=format&fit=crop&w=560&q=80',
  },
  {
    title: 'Abraço Animal',
    description:
      'Centro de resgate e adoção responsável de cães e gatos, com foco em castração e campanhas educativas.',
    image: 'https://images.unsplash.com/photo-1562851529-c370841f6536?auto=format&fit=crop&w=560&q=80',
  },
  {
    title: 'Tecendo Futuro',
    description:
      'Projeto que oferece aulas de tecnologia e empreendedorismo para adolescentes de escolas públicas.',
    image: 'https://images.unsplash.com/photo-1521321205814-9d673c65c167?auto=format&fit=crop&w=560&q=80',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Iniciativas</Text>
          <Text style={styles.paragraph}>
            Cada parceira passa por um processo de verificação para garantir que seu tempo e energia sejam bem investidos.
          </Text>

          {partners.map((partner, index) => (
            <InitiativeCard
              key={index}
              title={partner.title}
              description={partner.description}
              image={partner.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 10,
    marginBottom: 6,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
