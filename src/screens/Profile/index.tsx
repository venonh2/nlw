import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import {theme} from '../../global/theme/theme';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://avatars.githubusercontent.com/u/53799425?v=4" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.userName}>Brendow</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  userName: {
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    color: theme.colors.highlight,
  },
});

export default Profile;
