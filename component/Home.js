import { View,Text,TouchableOpacity,ScrollView,Image,TextInput,FlatList,Dimensions } from 'react-native';
import HomeStyle from './StyleHome';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Categories,COLOURS} from './database/items';
import React, { useState} from 'react';
const {height, width} =Dimensions.get('window')
const Home =({navigation})=>{
    const [selected,setSelected] =useState([0])
    const SelectCategories =({item,index})=>{
        return(
            <TouchableOpacity style={[HomeStyle.Item,selected==index ?HomeStyle.selected :HomeStyle.select]}
            onPress={()=>setSelected(index)}
            >
                <Image style={HomeStyle.ImageItem } source={item.image}/>
            <Text>{item.name}</Text>
            <View style={HomeStyle.IconRight}>
            <FontAwesome size={30} name="angle-right"/>
            </View>       
      </TouchableOpacity>  
        )
       
    }
    const RenderItem=(item,index) => {
        return (
            <TouchableOpacity style={HomeStyle.ItemProduct}
                key={index}
                onPress={()=> navigation.push('Detail', {
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    size: item.size,
                    crust: item.crust,
                    delivery: item.delivery,
                    ingredients: item.ingredients,
                    isTopOfTheWeek: item.isTopOfTheWeek,
                    navigation: navigation,
                  })}
            >
                <View style={{ flexDirection: 'row',
                alignItems: 'center', display: item.isTopOfTheWeek ? 'flex' : 'none',flex:1}}>
                  <FontAwesome name="crown" size={10} style={{color: COLOURS.accent}}></FontAwesome> 
                  <Text> Is top of the week</Text> 
                </View>
                <View style={HomeStyle.ContentProduct}>
                    <View>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>{item.name}</Text>
                    <Text>{item.weight}</Text>
                    </View>
                   
                    <Image style={{height:height/5.5,width:width/2.5,resizeMode: 'contain'}} source={item.image}/>
                </View>
                <View style={HomeStyle.footer}>
                        <View style={HomeStyle.selectProduct}>
                                <FontAwesome name='plus' size={10}/>
                        </View>
                        <View style={HomeStyle.rating}>
                        <AntDesign
                            name="star"
                            style={{fontSize: 12, color: COLOURS.black, paddingRight: 5}}
                            />
                         <Text>{item.rating}</Text>
                        </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.Header}>
                 <Image style={HomeStyle.Avatar} source={{uri:'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/217814098_1578676562472375_4650820265169834830_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=kr1xHBWRnesAX-Z1VM2&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8H7QGfXZuGCt50Wudm7EUt-bHV3SntfuNTFoz4MNWS-g&oe=61F98AA7'}}/> 
                 <Material name="segment" size={30}/>  
            </View>
            
            <ScrollView style={HomeStyle.Content}>
                <View style={HomeStyle.containerContent}>
                    <Text style={{fontWeight:'400',opacity:0.5,fontSize:16,paddingLeft:20}}>
                        Food
                    </Text>  
                    <Text style={{fontSize:35,fontWeight:'600',paddingLeft:20}}>Delivery</Text> 
                    <View style={HomeStyle.search}>
                        <Material name="search" size={30} style={{opacity:0.5}} />
                        <TextInput placeholder="Search..." style={{height:40,width:'80%',borderBottomWidth:0.7}}/>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'700',paddingLeft:20,marginTop:20}}>Categories</Text>
                    <FlatList 
                        data={Categories}
                        renderItem={SelectCategories}
                        horizontal={true}

                    />
                    <Text style={{paddingLeft:20,marginTop:20,fontSize:16,fontWeight:'bold'}}>Popular</Text>
                    {Categories[selected].items.map(RenderItem)}
                </View>
            </ScrollView>
        </View>
    )
}
export default Home;

