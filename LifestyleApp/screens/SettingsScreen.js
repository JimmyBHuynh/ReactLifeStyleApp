import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {Header, Left, Right, Body ,Icon, Title, Button} from 'native-base'

class SettingsScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="home" style={{fontSize: 24, color: tintColor}} />
        )
    }
    render(){
        return(
            <View style ={styles.container}>
                <Header>
                    <Left>
                        <Icon name = "menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                <Body> 
                <Title>
                Fitness App
                </Title>
                </Body>  
                <Right>
                    
                </Right>  
 
                </Header>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,

    }
})