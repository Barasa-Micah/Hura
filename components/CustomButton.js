import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../theme/Styles';

const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default CustomButton;
