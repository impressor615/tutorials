import React, { Component } from 'react';
import {
  Container, Header, Left, Body,
  Right, Button, Icon, Title,
  Content, Text, Form, Item, Input,
  Footer, FooterTab, Badge
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Alert } from 'react-native';
import SLACK from './constants/slack';


class LoginScreen extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.showResult = this.showResult.bind(this);
    this.state = {
      username: '',
      password: '',
    }
  }

  login(e) {
    this.setState({
    })
  }

  setUsername(username) {
    this.setState({
      username,
    })
  }

  setPassword(password) {
    this.setState({
      password,
    })
  }

  showResult() {
    Alert.alert(`username: ${this.state.username} / password: ${this.state.password} \n Login Success`)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Type username"
                onChangeText={this.setUsername} value={this.state.username} />
            </Item>
            <Item last>
              <Input placeholder="Type password" name="password"
                secureTextEntry={true} onChangeText={this.setPassword} value={this.state.password} />
            </Item>
            <Button block onPress={() => {
              this.showResult()
              navigate('Home');
            }}>
              <Text>Log In</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
};

class HomeScreen extends Component {
  static sendSlack() {
    return fetch(SLACK.URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: SLACK.CHANNEL,
        text: `*김성현님* 출근했습니다.`,
        username: '출근봇',
        icon_emoji: ':apartmentary:',
      })
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button success block onPress={() => {
            HomeScreen.sendSlack()
              .then(() => {
                Alert.alert('출석 도장을 찍었습니다.');
              })
              .catch((error) => {
                console.log(error);
              })
            }}
          >
            <Text>출석 도장 찍기</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
});

const App = () => (
  <RootNavigator />
);

export default App;
