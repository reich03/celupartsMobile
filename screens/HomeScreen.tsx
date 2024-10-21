import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/celuparts-transparent-2.png')} 
        style={styles.logo}
      />
      
      <Text style={styles.subtitle}>Tu móvil en nuestras manos</Text>
      
      <Button
        title="Ir a Reparaciones"
        onPress={() => navigation.navigate('WebViewScreen')}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Celuparts. Todos los derechos reservados.</Text>
        <Text style={styles.footerText}>Contacto: info@celuparts.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 20,  
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 12,
  },
});

export default HomeScreen;
