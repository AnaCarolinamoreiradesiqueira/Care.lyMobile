import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,} from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Seção 1: O que nós somos */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?auto=format&fit=crop&w=900&h=900&q=80' }}
          style={styles.image}
        />
        <View style={styles.textBlock}>
          <Text style={styles.title}>Junte-se a quem faz a diferença</Text>
          <Text style={styles.paragraph}>
            O Care.ly conecta voluntários a causas sociais que precisam de apoio. Descubra como você pode contribuir para um mundo melhor.
          </Text>
          <View style={styles.list}>
            {[
              'Faça parte de uma comunidade engajada e solidária',
              'Desenvolva habilidades interpessoais e profissionais',
              'Descubra o poder de transformar vidas — inclusive a sua',
            ].map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Seção 2: Porque o Care.ly */}
      <View style={styles.section}>
        <Text style={styles.title}>Encontre propósito e pertencimento em cada ação</Text>
        <Text style={styles.paragraph}>
          No Care.ly, acreditamos que pertencer é mais do que estar presente — é ser reconhecida, valorizada e inspirada.
        </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Saiba mais sobre nós →</Text>
        </TouchableOpacity>

        <View style={styles.iconBlock}>
          <Text style={styles.subtitle}>Sobre o Care.ly</Text>
          <Text style={styles.paragraph}>
            O Care.ly nasceu da vontade de facilitar o voluntariado. Nosso objetivo é aproximar quem quer ajudar de quem precisa de apoio.
          </Text>
        </View>

        <View style={styles.iconBlock}>
          <Text style={styles.subtitle}>Como funciona?</Text>
          <Text style={styles.paragraph}>
            Você cria um perfil, seleciona causas com as quais se identifica, e o sistema mostra iniciativas sociais próximas a você.
          </Text>
        </View>

        <View style={styles.iconBlock}>
          <Text style={styles.subtitle}>Por que ser voluntária?</Text>
          <Text style={styles.paragraph}>
            Ser voluntária vai além de ajudar: é desenvolver empatia, habilidades interpessoais e criar conexões verdadeiras com a comunidade.
          </Text>
        </View>
      </View>

      {/* Seção 3: Colaboradores */}
      <View style={styles.section}>
        <Text style={styles.title}>Colaboradores</Text>
        <Text style={styles.paragraph}>
          Cada parceira passa por um processo de verificação para garantir que seu tempo e energia sejam bem investidos.
        </Text>

        {[
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
        ].map((partner, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: partner.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{partner.title}</Text>
            <Text style={styles.paragraph}>{partner.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
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
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 16,
  },
  textBlock: {
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 12,
  },
  paragraph: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 18,
    color: '#2563eb',
    marginRight: 6,
  },
  listText: {
    flex: 1,
    color: '#374151',
  },
  link: {
    color: '#2563eb',
    fontWeight: '500',
    marginTop: 8,
  },
  iconBlock: {
    marginTop: 16,
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
});

export default Home;
