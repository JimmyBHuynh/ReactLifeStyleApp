import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground
} from "react-native";
import {Header, Left, Right, Body ,Icon, Title, Button} from 'native-base'
class HomeScreen extends Component {
    //Button Design
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="home" style={{fontSize: 24, color: tintColor}} />
        )
    }
    render(){
        return(
            <View style ={styles.container}>
             
            <ImageBackground source={require('../assets/images/background.jpg')} style={{width: '100%', height: '100%'}}>
               {/*Header Tag Contains the navigation menu*/}
                <Header>
                    <Left style = {{flex:0}}>
                        <Icon name = "menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                <Body style ={styles.center}> 
                <Title style ={styles.title}>Lifeaholic</Title>
                </Body>
                <Right style = {{flex:0}}>
                <Icon name = "person" onPress={()=>this.props.navigation.openDrawer()}/>
                </Right>  
                </Header>
                <ScrollView>
                    <View style ={styles.center}>
                   
                    <Text style = {styles.header}>Home</Text>
                    
                    </View>
                    
                </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25 , 
        color: 'white'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25 , 
        color: 'white'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40 , 
        color: 'white'
    }
})