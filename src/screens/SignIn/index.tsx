import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
//import {styles} from './styles';

import Illustration from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import {theme} from '../../global/theme/theme';

const SignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Illustration} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}suas jogatinas{'\n'} facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleNavigateToHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
  },
  content: {
    marginTop: -40,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
    lineHeight: 25,
  },
});

export default SignIn;
