import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyledView, StyledHomeButtonView } from '../components/StyledView';
import GeometryBackground from '../components/GeometryBackground';
import QuestionSets from '../components/files.json';
import HomeButton from '../components/HomeButton';
import questions from '../components/questions.json';

export const SelectQuestionSet = ({ route, navigation }) => {
    const { destination } = route.params;
    const backgrounds = [
        require('../assets/genconnect_ombre_allaboutme.png'),
        require('../assets/genconnect_ombre_brightfuture.png'),
        require('../assets/genconnect_ombre_whatwouldyoudo.png'),
        require('../assets/genconnect_ombre_dancechallenge.png')
    ]
    const QuestionSetTiles = QuestionSets.map((QuestionSet, index) =>
        <HomeButton
            key={index}
            text={QuestionSet.file}
            onPress={() => navigation.navigate(destination, { ...QuestionSet, "qs": questions[QuestionSet.file] })}
            source={backgrounds[index % 4]}
        />
    );
    return (
        <StyledView>
            <GeometryBackground />
            <StyledHomeButtonView>
                {QuestionSetTiles}
            </StyledHomeButtonView>
            <StatusBar style="auto" />
        </StyledView>
    );
};


