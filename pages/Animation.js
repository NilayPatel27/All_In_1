import React, { useState } from 'react'
import { View, Text, Image, ScrollView ,Dimensions, StyleSheet} from 'react-native'
import Header from './header'
const {width}= Dimensions.get("window");
const height = width*0.6;

const images = [
    'https://images.pexels.com/photos/1205022/pexels-photo-1205022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD2nD7r9Cm_bwolec-OMa5HrzTKXh9_3qGCHdqsNXIb2Vosqrn-RMdwNgX6nVB2zgxYI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0P_XHv4Qy9pPtsGwWKCXtDh0Xd69Okjw1VSZTghXcAcW5rTHeAseVX5mZ9TIWPQqrCPg&usqp=CAU',
    'https://live.staticflickr.com/596/32322648651_0a607c7840_b.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WVHyUJji4022xN4qea9MgWox0FELUNW5V8rk9Bo20BZ3cSSZ8WTq04oGH054YBe2Ogo&usqp=CAU',

]

const Animation = ({ navigation }) => {
    const change = ({nativeEvent})=>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide!== active)
            setactive(active=>slide)
    }
    const [active, setactive] = useState(0)
    return (
        <>
        <View>
            <Header navigation={navigation} />
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{ color: 'green',fontWeight:'600',fontSize:30 }}>Animation</Text>
          </View>
            <View  style={styles.container}>
                <ScrollView 
                pagingEnabled 
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.image} />
                    ))
                    }
                </ScrollView>
            </View>
            <View style={styles.pagination}>
            {
                images.map((i,k)=>(
                    <Text key={k} style={k==active?styles.pagingActiveText: styles.pagingText}>⬤</Text>
                ))
            }
        </View>
        </View>
        <ScrollView>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>
            <View>
                <Text style={{color:'black',paddingHorizontal:15,marginTop:5}}>Canon EOS 80D DSLR Camera Body with 18-135 mm Lens(Black)</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={{color:'black',paddingHorizontal:15,marginTop:10,fontWeight:'600'}}>$99</Text>
            <Text style={{color:'green',paddingHorizontal:15,marginTop:10}}>16% off</Text>
            </View>

        </ScrollView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        width,
        height,
        marginTop:5

    },

    image:{
        width,
        height,
        resizeMode:'contain'
    },
    pagination:{
        flexDirection:'row',
        position: 'absolute',
        bottom: 0,
        alignSelf:'center'

    },
    pagingText:{ fontSize:(width/30),color:'#888',margin:3},
    pagingActiveText:{ fontSize:(width/30),color:'#fff',margin:3},
})

export default Animation
