/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Counter extends Component {
	constructor(props) {
	    super(props);
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}



  render() {
    return (
    	
    	<View style={styles.container}>
      		<Button
			  onPress={this.props.increment}
			  title="Up"
			  color="#841584"
			  style={styles.button}
			/>
			<Text style={styles.counter}> {this.props.count} </Text>
			<Button
			  onPress={this.props.decrement}
			  title="Down"
			  color="#841584"
			  style={styles.button}
			/>
    	</View>
	    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
  	padding: 30,
    alignSelf: 'center',
    fontSize: 26,
	fontWeight: 'bold',
  }
  
});