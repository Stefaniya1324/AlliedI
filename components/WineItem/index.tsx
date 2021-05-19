import React, { useEffect, useState} from 'react'
import { Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';
//import { Storage } from 'aws-amplify';

import { Wine } from '../../types';
import styles from './styles';

interface WineItemProps{
    wine: Wine;
    onPress: (winee: Wine) => {}
}
const WineItem = (props: WineItemProps) => {
    const navigation = useNavigation();
    const { wine, onPress } = props;

    const onWinePress = () => {
        navigation.navigate('WineDetailsScreen', { id: wine.id })
    }

    return (
        <Pressable style={{ margin: 10 }} onPress={() => onPress(wine)}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: wine.poster }} />
            </View>
        </Pressable>
    )
};

export default WineItem