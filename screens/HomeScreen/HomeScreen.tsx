import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import styles from './styles';
import HomeCategory from '../../components/HomeCategory';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* list of categories */}
      <FlatList
      data={categories.items}
      renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}

export default HomeScreen; 
