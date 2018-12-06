import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image
} from "react-native";
import { Container, Header, Left, Right, Body, Icon, Title, Content, Thumbnail, Button, Footer, FooterTab } from 'native-base'

class PedometerScreen extends Component {
    //Button Design
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="pulse" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        const uri = "https://cdn4.iconfinder.com/data/icons/positive-character-traits-alphabet-d/210/positive-d005-512.png";
        return (
            <Container>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                        {/*Header Tag Contains the navigation menu*/}
                        <Header>
                            <Left style={{ flex: 0 }}>
                                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                            </Left>
                            <Body style={styles.center}>
                                <Title style={styles.title}>Lifeaholic</Title>
                            </Body>
                            <Right style={{ flex: 0 }}>
                                <Icon name="person" onPress={() => this.props.navigation.openDrawer()} />
                            </Right>
                        </Header>
                        <Content>
                            <ScrollView>
                                <View style={styles.center}>
                                    <Text style={styles.header}>Pedometer</Text>
                                    <Image
                                        style={{ width: 150, height: 100 }}
                                        resizeMode="contain"
                                        source={{ uri: uri }}
                                    />
                                    <Text style={styles.header}> 1000 </Text>
                                    <Text style={styles.text}> steps </Text>
                                    <Text style={styles.header}>  Goal: 2000 </Text>
                                </View>
                            </ScrollView>
                        </Content>
                        <Footer>
                            <FooterTab>
                                <Button>
                                    <Icon name="apps" />
                                    <Text>Today</Text>
                                </Button>
                                <Button>
                                    <Icon name="camera" />
                                    <Text>Week</Text>
                                </Button>
                                <Button active>
                                    <Icon active name="navigate" />
                                    <Text>Overall Summary</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                    </ImageBackground>
                </View>
            </Container>
        );
    }
}
export default PedometerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    }
})