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
import { Col, Row, Grid } from "react-native-easy-grid";

class PedometerScreen extends Component {
    //Button Design
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="pulse" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        const uri = "https://www.fibodo.com/images/homepageicons/section2/home_runner.png";
        return (
            <Container>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/darkbg.jpg')} style={{ width: '100%', height: '100%' }}>
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
                                <View style={styles.center}>

                                    <Text style={[styles.marginheader , styles.header]}>Pedometer</Text>
<Text style={styles.goaltext}>Touch to Start</Text>
                                    <Image
                                        style={{ width: 150, height: 100, marginTop: 10, marginBottom: 10 }}
                                        resizeMode="contain"
                                        source={{ uri: uri }}
                                    />
                                    <Text style={[styles.goaltext, styles.marginbottom]}>  Goal: 2000 </Text>
                                    <Text style={styles.walktext}> 1000 </Text>
                                    <Text style={[styles.text, styles.marginbottom2]}> steps </Text>
                                    
                                    <Grid >
                             <Col style={styles.center}>
                             <Icon type="MaterialCommunityIcons" name="run" style={{fontSize: 30, color: 'yellow'}} />
                             <Text style={styles.titletext}>1.58</Text>
                             <Text style={styles.smalltext}>Kilometer</Text>
                             </Col>
                            <Col style={styles.center}>
                            <Icon type="MaterialCommunityIcons" name="fire" style={{fontSize: 30, color: 'red'}}/>
                            <Text style={styles.titletext}>172</Text>
                            <Text style={styles.smalltext}>Kcal</Text>
                            </Col>
                             <Col style={styles.center}>
                             <Icon type="FontAwesome" name="clock-o" style={{fontSize: 30, color: 'grey'}} />
                             <Text style={styles.titletext}>00:34</Text>
                             <Text style={styles.smalltext}>Time</Text>
                             </Col>
                                </Grid>
                                </View>
                        </Content>
                        <Footer>
                            <FooterTab>
                                <Button>
                                    <Icon type="MaterialCommunityIcons" active name="calendar-today" />
                                    <Text style={styles.white}>Today</Text>
                                </Button>

                                <Button active>
                                    <Icon type="MaterialCommunityIcons" name="calendar-range" />
                                    <Text style={styles.white}>Overall Summary</Text>
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
        fontSize: 20,
        color: 'grey'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    titletext: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    walktext: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    goaltext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    marginheader: {
        marginTop: 20,
        marginBottom: 20
    },
    marginbottom: {
        marginBottom: 40
    },
    marginbottom2: {
        marginBottom: 50
    },
    smalltext: {
        fontSize: 15,
        color: 'white',
        opacity: 0.6
    },
    white: {
     color: 'white'
    }
})