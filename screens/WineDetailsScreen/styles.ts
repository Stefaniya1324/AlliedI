import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image:{
        marginLeft: 50,
        width: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 9/16,
        //resizeMode: 'cover',
    },
    title:{
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    origin: {
        color: '#CC0000',
        fontWeight: 'bold',
        marginRight: 7,
    },
    year: {
        color: '#757575',
        marginRight: 5,

    },
    ratingContainer:{
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    }, 
    rating:{
        color: 'black',
        fontWeight: 'bold'
    },
    scrollView: {
        backgroundColor: '#422933',
        marginBottom: 150,
        //marginHorizontal: 20,
      },

    //Button
    Button: {
        backgroundColor: '#FFC815',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    firstButton: {
        backgroundColor: '#FFC815',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 3,
        marginVertical: 5,
        marginTop: 30,
    }

})

export default styles;
