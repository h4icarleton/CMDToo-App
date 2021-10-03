import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    ONELINE_MAX_HEIGHT_PLAY_BUTTON,
    FIXED_TEXT_WIDTH_BUTTON
} from '../components/Constants.js';
import CustomButton from '../components/CustomButton.js';
import Card from '../components/Card.js';
import HomeButton from '../components/HomeButton.js';
import qs from '../components/questions.json';
import { Modal, Linking, View, Image } from 'react-native';
import {
    StyledView,
    AppDesc,
    CategoryHeader,
    YouFinished,
    StyledHomeButtonView
} from '../components/StyledView';
import GeometryBackground from '../components/GeometryBackground';

export const Play = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    let categories = [
        'favorites',
        'dance challenge',
        'all about me',
        'the inner me',
        'what would you do?',
        'my bright future'
    ];
    let list = [];
    const [questions, setQuestions] = useState(qs);
    const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState();
    useEffect(() => {
        list = [];
        categories.forEach(category => {
            const cardLeft = questions.filter(
                q => q.Category.toLowerCase() === category
            );
            const lengthOfCardLeft = cardLeft.length;

            list.push(
                <CustomButton
                    key={category}
                    text={category.toUpperCase()}
                    color={category}
                    displayIcon={true}
                    maxHeight={ONELINE_MAX_HEIGHT_PLAY_BUTTON}
                    disabled={lengthOfCardLeft === 0}
                    isAllCap={true}
                    fixedTextWidth={FIXED_TEXT_WIDTH_BUTTON}
                    warningText={
                        lengthOfCardLeft <= 3
                            ? `${lengthOfCardLeft} ${
                            lengthOfCardLeft === 1 ? 'card' : 'cards'
                            } left`
                            : undefined
                    }
                    onPress={() => {
                        setOptions([]);
                        let ques = cardLeft;
                        ques = ques[Math.floor(Math.random() * ques.length)];
                        setOptions(
                            <Card
                                category={ques.Category}
                                question={ques}
                                color={ques.Category.toLowerCase()}
                                hasFollowUp={
                                    ques['Follow Up'] !== '' ? true : false
                                }
                                setModalVisible={setModalVisible}
                                setOptions={setOptions}
                            ></Card>
                        );
                        setQuestions(oldQ =>
                            oldQ.filter(qw => qw.Question != ques.Question)
                        );
                        setModalVisible(true);
                    }}
                />
            );
        });
        if (questions.length) {
            setDisplay(
                <>
                    <GeometryBackground />
                    <CategoryHeader> PICK A CATEGORY </CategoryHeader>
                    {list}
                </>
            );
        } else {
            setDisplay(
                <StyledView>
                    <GeometryBackground />
                    <YouFinished> HOORAY! YOU'VE FINISHED. </YouFinished>
                    <AppDesc> Thoughts? Take our survey below! </AppDesc>
                    <StyledHomeButtonView>
                        <HomeButton
                            text="SURVEY"
                            source={require('../assets/genconnect_ombre_allaboutme.png')}
                            onPress={() =>
                                Linking.openURL(
                                    'https://docs.google.com/forms/d/e/1FAIpQLSe47cA8qTGibaL4EuBOfr6OkY3gEva0FyHIEgqSZ1j-y0EWkg/viewform?usp=sf_link'
                                )
                            }
                        />
                        <HomeButton
                            text="PARENT GUIDE"
                            source={require('../assets/genconnect_ombre_whatwouldyoudo.png')}
                            onPress={() => navigation.navigate('Parent Guide')}
                        />
                        <HomeButton
                            text="CMDTOO WEBSITE"
                            source={require('../assets/genconnect_ombre_favorites.png')}
                            onPress={() =>
                                Linking.openURL(
                                    'https://www.coolmomsdancetoo.com/'
                                )
                            }
                        />
                        <HomeButton
                            text="HOME"
                            source={require('../assets/genconnect_ombre_innerme.png')}
                            onPress={() => navigation.navigate('Home')}
                        />
                    </StyledHomeButtonView>

                    <Image
                        source={require('../assets/CoolMomsLogo.png')}
                        style={{ marginTop: 70 }}
                    />
                </StyledView>
            );
        }
    }, [questions]);

    return (
        <StyledView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <StyledView>{options}</StyledView>
            </Modal>
            {display}
            <StatusBar style="auto" />
        </StyledView>
    );
};
