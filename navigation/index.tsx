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

const WineDetailsScreen = ({
    navigation,
    route: {
      params: { id },
    },
  }) => {
      const selectedWine = wine.items.find((item) => {
        if (item.id === id) {
            return item;
        }
      });
    return(
        <View>
            {selectedWine && (<>
            
            <View style={{ padding:12 }}>
                <Text style={styles.title}>{selectedWine.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.origin}>{selectedWine.origin}</Text>
                        <Text style={styles.year}>{selectedWine.year}</Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>{selectedWine.rating}</Text>
                        </View>
                    </View>
            </View>

        <ScrollView style={styles.scrollView} >

            <Image style={styles.image} source={{ uri: selectedWine?.seasons.items[0].poster}} />

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
        </ScrollView></>)}
        {!selectedWine && (
            
            <View>
               <Text style={styles.emptyTitle}>There is no information about selected wine.</Text>
            </View>)}
        </View> 
    )
};

export default WineDetailsScreen;


