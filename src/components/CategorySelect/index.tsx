import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {categories} from '../../utils/categorys';
import CategoryCard from '../CategoryCard';

type Props = {
  categorySelected: string;
  setCategory(categoryId: string): void;
};

const CategorySelect = ({categorySelected, setCategory}: Props) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40}}>
      {categories.map(category => {
        return (
          <CategoryCard
            onPress={() => setCategory(category.id)}
            key={category.id}
            icon={category.icon}
            title={category.title}
            checked={category.id === categorySelected}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 120,
    maxHeight: 120,
  },
});

export default CategorySelect;
