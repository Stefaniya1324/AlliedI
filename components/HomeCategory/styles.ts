import { StyleSheet } from  'react-native';


const styles = StyleSheet.create({

    container:  {
         flex: 1,
         padding: 10,
         backgroundColor: '#422933'
    },

    image: {
        width: 100,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 10,
    },

    title: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 10,
        fontSize: 20,
        color: '#1c040d',
        textAlign: "center",
        fontWeight: "bold",

    }
    

});

export default styles;