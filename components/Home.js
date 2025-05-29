import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.section}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?auto=format&fit=crop&w=900&h=900&q=80',
            }}
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

        <View style={styles.section}>
          <Text style={styles.title}>Encontre propósito e pertencimento em cada ação</Text>

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
  iconBlock: {
    marginTop: 16,
  },
});

export default Home;
