import React from 'react';
import styled from 'styled-components/native';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';



const styles = StyleSheet.create({
    styledBackground: {
        backgroundColor: "#46C1C1"
    },
    styledImage: {
        width: '100%',
        height: 100
    },

});

const InfoButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items:center;

`;

const FooterButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <InfoButtonContainer>
                <Image source={props.source} style={styles.styledImage} />
            </InfoButtonContainer>
        </TouchableOpacity>
    );
};
export default FooterButton;