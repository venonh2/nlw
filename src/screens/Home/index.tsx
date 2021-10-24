import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import AppointmentCard from '../../components/AppointmentCard';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import ListSeparator from '../../components/ListSeparator';
import Profile from '../Profile';

const appointments = [
  {
    id: 1,
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos detonar no cs',
  },
  {
    id: 2,
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos detonar no cs',
  },
];

const Home = () => {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="6" />

        <FlatList
          data={appointments}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.matches}
          ItemSeparatorComponent={() => <ListSeparator />}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <AppointmentCard data={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    marginTop: getStatusBarHeight() + 2,
    marginBottom: 42,
  },
  content: {
    marginTop: 42,
  },
  matches: {
    marginTop: 24,
  },
});

export default Home;
