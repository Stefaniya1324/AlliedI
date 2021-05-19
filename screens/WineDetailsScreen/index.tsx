import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, {useState}from 'react'
import { Image, Pressable, ScrollView } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 
import { ViewComponent } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import wine from '../../assets/data/wine';
import WineItem from '../../components/WineItem';
import {useNavigation} from '@react-navigation/native';

const firstWine = wine.items[0].seasons.items[0];
const secondWine = wine.items[2].seasons.items[0];

const WineDetailsScreen = () => {
    console.log(firstWine);
    return(
        <View>
            
                <View style={{ padding:12 }}>
                    <Text style={styles.title}>{wine.items[0].title}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.origin}>{wine.items[0].origin}</Text>
                            <Text style={styles.year}>{wine.items[0].year}</Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.rating}>{wine.items[0].rating}</Text>
                            </View>
                        </View>
                </View>

            <ScrollView style={styles.scrollView} >

                <Image style={styles.image} source={{ uri: firstWine.poster}} />

                <View style={{ padding:12 }}>
                    

                    <Pressable onPress={(firstWine) => { console.log(firstWine)}} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                                Front Label
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => { console.warn('Plage')}} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                                Back Label
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => { console.warn('Plage')}} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                                Sell Sheet
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => { console.warn('Plage')}} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                                Bottle Shot
                        </Text>
                    </Pressable>

                    <View style={{flexDirection: 'row', marginTop: 20,}}>
                        <View style={{alignItems: 'center', marginHorizontal: 20}}>
                            <AntDesign name="plus" size={24} color={'white'} />
                            <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                        </View>

                        <View style={{alignItems: 'center', marginHorizontal: 20}}>
                            <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                        </View>
                    </View>

                </View>     
            </ScrollView>
        </View> 
    )
};

export default WineDetailsScreen;


