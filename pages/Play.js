import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton.js';
import Card from '../components/Card.js';
import qs from '../components/questions.json';
import { Modal, Linking } from 'react-native';
import {
    StyledView,
    AppName,
    AppDesc,
    CategoryHeader
} from '../components/StyledView';

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
                    text={category}
                    color={category}
                    disabled={lengthOfCardLeft === 0}
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
                                hasFollowUp={ques.hasFollowUp}
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
                    <CategoryHeader> Pick a Category </CategoryHeader>
                    {list}
                </>
            );
        } else {
            setDisplay(
                <>
                    <AppName> YOU FINISHED! </AppName>
                    <AppDesc>
                        {' '}
                        What is something new you learned today?{' '}
                    </AppDesc>
                    <CustomButton
                        text="go home"
                        color="CMDPink"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <CustomButton
                        text="parent guide"
                        color="CMDTurquoise"
                        onPress={() => navigation.navigate('Parent Guide')}
                    />
                    <CustomButton
                        text="CMDToo Website"
                        color="CMDGreen"
                        onPress={() =>
                            Linking.openURL('https://www.coolmomsdancetoo.com/')
                        }
                    />
                </>
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
