import 'react-native-gesture-handler';
import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import FooterButton from '../components/FooterButton.js';
import * as SMS from 'expo-sms';


const styles = StyleSheet.create({
    styledFooter: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

});

export const Footer = ({ navigation }) => {
    return (

        <View style={styles.styledFooter}>
            <FooterButton
                onPress={() => navigation.navigate('About')}
                source={require("../assets/genconnect_footerbuttons_about.png")}
            />
            <FooterButton
                source={require("../assets/genconnect_footerbuttons_share.png")}
                onPress={() =>
                    Linking.openURL(
                        `sms:&addresses=&body=Check out Gen Connect on the App Store! https://apps.apple.com/us/app/gen-connect/id1588977864`
                    )
                }
            />
            <FooterButton
                source={require("../assets/genconnect_footerbuttons_review.png")}
                onPress={() =>
                    Linking.openURL(
                        'https://apps.apple.com/us/app/gen-connect/id1588977864'
                    )
                }
            />
            <FooterButton
                onPress={() => Linking.openURL('mailto:quyionah@coolmomsdancetoo.com')}
                source={require("../assets/genconnect_footerbuttons_contact.png")}
            />
            <FooterButton
                onPress={() =>
                    Linking.openURL(
                        'https://docs.google.com/forms/d/e/1FAIpQLSe47cA8qTGibaL4EuBOfr6OkY3gEva0FyHIEgqSZ1j-y0EWkg/viewform?usp=sf_link'
                    )
                }
                source={require("../assets/genconnect_footerbuttons_feedback.png")}
            />

        </View>
    )

};