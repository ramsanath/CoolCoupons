import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './src/components/card/card';
import Row from './src/components/row/row';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <Card title={'Dominos'} image={require('./src/dominos.png')} />
        <Row 
        image={require('./src/dominos.png')} 
        title={'Quattro Formagatti'} 
        subtitle={'Dominos'} 
        desc={'Flat 50% off on all Quattro Formagatti pizzas for a limited time!'} />
      </View>
    );
  }
}
