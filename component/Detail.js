import { View,Text,TouchableOpacity,StyleSheet ,Dimensions,Image,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOURS} from './database/items';
import React, { useState } from 'react';
const {height, width} =Dimensions.get('window')
const Detail =({route,navigation})=>{
const { name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,} = route.params;
    return (
        <View style={styles.container}>
            <View   style={styles.Header}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:40, width:40,borderWidth:0.5,justifyContent:'center',alignItems: 'center',borderRadius:8}}>
                <FontAwesome size={15} name="angle-left"/>
                </TouchableOpacity>
                <View style={{height:40, width:40,borderWidth:0.5,justifyContent:'center',alignItems: 'center',backgroundColor:COLOURS.accent,borderRadius:8,marginRight:20}}>
                    <Ionicons name="star" size={15} style={{color:COLOURS.white}}/>
                </View>
            </View>
            <View style={styles.title}>
            <Text style={{fontSize:40,maxWidth:300,fontWeight:'800'}}>{name}</Text>
                <View style={{ flexDirection:'row'}}>
                <Text style={{color:COLOURS.accentRed,fontSize:20}}>₹</Text>
                <Text style={{color:COLOURS.accentRed,marginLeft:5,fontSize:30}}>{price}</Text>
                </View>     
            </View>
            <View style={styles.content}>
                <View >
                    <View >
                        <Text style={styles.fontA}>Size</Text>
                        <Text style ={styles.fontB}>{size}</Text>
                    </View>
                    <View style={{marginTop:height*0.05}}>
                        <Text style={styles.fontA}>Crust</Text>
                        <Text style ={styles.fontB}>{crust}</Text>
                    </View>
                    <View style={{marginTop:height*0.05}}>
                        <Text style={styles.fontA}>Delivery</Text>
                        <Text style ={styles.fontB}>{delivery}</Text>
                    </View>
                </View>
                <View>
                    <Image style={{height:width/2, width:width/2}} source={image}/>
                </View>
            </View>
            <Text style={{fontSize:22,fontWeight: 'bold'}}>ingredients</Text>
            <View style={styles.ingredients}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {ingredients.map((data,index)=>{
                        return (
                            <TouchableOpacity style={styles.ItemIngredient} >
                                <Image style={{height:'100%',width:'100%'} } source={data}/>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.Order}>
                <TouchableOpacity style={styles.btnOrder} onPress={()=>navigation.goBack()}>
                      
                            <Text style={{fontSize:17,fontWeight: 'bold'}}> Place on order</Text>
                            <FontAwesome style={{marginLeft:5}} size={15} name="angle-right"/>
                     
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Detail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        paddingLeft:20,
    },
    Header:{
        flex: 1,
       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 2,
    },
    content:{
        flex: 4,
      
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ingredients:{
        flex: 2,
    },
    Order: {
        flex: 1,
     
        alignItems: 'center',
    },
    fontA:{
        fontSize:12, 
        opacity:0.5,
    },
    fontB:{
        fontSize:17,
        fontWeight: '800',
    },
    ItemIngredient:{
        height:width/4.5,
        width:width/4.5,
        backgroundColor:COLOURS.white,
        marginRight:8,
        elevation:5,
        borderRadius:8,
        marginTop:10
    },
    btnOrder:{
        width:width-100,
        backgroundColor:COLOURS.accent,
        height:'100%',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})