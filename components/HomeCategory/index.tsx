import React, { useEffect, useState } from 'react';
import { Image, FlatList, Pressable } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text  } from '../../components/Themed';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        wines:{
            id: string,
            poster: string, 
        }[]
    }
    
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    const navigation = useNavigation();
    const onWinePress = (wines) => {
        navigation.navigate('WineDetailsScreen', {id: wines.id})
    }
    return (
        <>
        <Text style={styles.title}>{category.title}</Text>
            <FlatList 
            data={category.wines}
            renderItem={({item}) => (
                <Pressable onPress={() => onWinePress(item)}>
                    <Image style={styles.image} source={{ uri: item.poster }} />
                </Pressable>
                
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default HomeCategory; 
