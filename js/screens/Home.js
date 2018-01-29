import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableHighlight } from 'react-native';
import Avatar from '../../js/components/Avatar';

export default class Home extends React.Component {


	goToProfile = () => {
	}

	goToRestaurants = () => {
		this.props.navigation.navigate('Restaurants');
	}

	goToWine = () => {
	}

	goToGifts = () => {
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.avatarContainer}>
					<TouchableHighlight onPress={this.goToProfile}>
						<Image style={styles.avatarImage} source={require('../../assets/img/profileDefault.png')}/>
					</TouchableHighlight>
				</View>
				<View style={styles.topNav}>
					<TouchableHighlight onPress={this.goToRestaurants}>
						<Image style={styles.topNavButton} source={require('../../assets/img/restaurantButton.png')}/>
					</TouchableHighlight>
					<TouchableHighlight onPress={this.goToWine}>
						<Image style={styles.topNavButton} source={require('../../assets/img/wineButton.png')}/>
					</TouchableHighlight>
					<TouchableHighlight onPress={this.goToGifts}>
						<Image style={styles.topNavButton} source={require('../../assets/img/giftsButton.png')}/>
					</TouchableHighlight>
				</View>
				<View style={styles.jumbotron}>
					<Image style={{resizeMode:'stretch', width: 400, height:120}} source={require('../../assets/img/jumbotron.png')}/>
				</View>
				<View>
					<Text style={styles.subTitleText}>
						BEST RESTAURANTS AROUND YOU
					</Text>
					<View style={styles.suggestionContainer}>
						<Image style={styles.suggestionButton} source={require('../../assets/img/rest1.png')}/>
						<Image style={styles.suggestionButton} source={require('../../assets/img/rest2.png')}/>
					</View>
				</View>
				<View>
					<Text style={styles.subTitleText}>
						TODAY'S PICKS
					</Text>
					<View style={styles.suggestionContainer}>
						<Image style={styles.suggestionButton} source={require('../../assets/img/rest1.png')}/>
						<Image style={styles.suggestionButton} source={require('../../assets/img/rest2.png')}/>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 20,
  	paddingLeft: 20,
  	paddingRight: 20
  },
  avatarContainer: {
	alignItems: 'center'
  },
  avatarImage: {
  	width: 100,
  	height:100
  },
  topNav: {
  	marginTop: 20,
  	flexDirection: 'row',
  	paddingBottom: 20,
  	borderBottomWidth: 2,
  },
  topNavButton: {
  	width: 111,
  	height: 100
  },
  jumbotron: {
  	marginTop: 20,
  	marginLeft: -20
  },
  subTitle: {
  	alignItems: 'flex-start'
  },
  subTitleText: {
  	textAlign: 'left',
  	color: '#848484',
  	fontSize: 16,
  	fontWeight: 'bold',
  	marginTop:20
  },
  suggestionContainer: {
  	marginTop: 20,
  	flexDirection: 'row'
  },
  suggestionButton: {
  	width: 160,
  	height: 150	
  }
});