import React from 'react';
import {Image, TouchableHighlight} from 'react-native';

export default class Avatar extends React.Component {

	// goToProfile() => {
	// 	console.log('hiihihih');
	// }

	render() {
		return (
			<TouchableHighlight onPress={this.goToProfile}>
				<Image source={require('../../assets/img/profileDefault.png')}/>
			</TouchableHighlight>
			
		);
	}
}