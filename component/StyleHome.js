import { StyleSheet ,Dimensions} from 'react-native';
import {COLOURS} from './database/items';
const {height, width} =Dimensions.get('window')
const HomeStyle = StyleSheet.create({
    container:{
            flex: 1,
            padding:10,
    },
    Header:{
        height:height/10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Content:{
        
       
    },
    Avatar:{
        height:50,
        width:50,
        borderRadius:44
    },
    containerContent: {
        flex:1,
    },
    search:{
        flexDirection:'row',
        marginTop:height*0.05,
        justifyContent: 'center',
    },
    Item:{
        height:height/4,
        width:width/3.3,
        borderRadius:20,
        marginLeft:5,
        elevation:5,
        marginTop:20,
        backgroundColor:'#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    ImageItem:{
        height:70,
        width:70
    },
    IconRight:{
        height:40,width:40,
        borderRadius:44,
        backgroundColor:'#cc8f17',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ItemProduct:{
        height:height/4,
        paddingHorizontal:20,
        borderRadius:20,
        elevation:5,
        marginTop:20,
        backgroundColor:'#fff',
        
        
        flex:1,
    },
    ContentProduct:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight:-(width/10),
        resizeMode: 'contain',
        paddingTop:10,
        flex:4,
       
    },
    footer: {
        flex:1,
        flexDirection: 'row',
        
    },
    selectProduct: {
        backgroundColor:COLOURS.accent,
        height:'100%',
        width:'25%',
        marginLeft:-20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    rating:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft:20
    },
    select:{
        backgroundColor:COLOURS.white,
    },
    selected:{
        backgroundColor:COLOURS.accent
    }

})
export default HomeStyle;