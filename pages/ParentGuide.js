import React, { useState, useEffect } from 'react';
import qs from '../components/questions.json';
import CustomButton from '../components/CustomButton.js';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { BIG_MIN_HEIGHT_BUTTON } from '../components/Constants';
import {
    ScrollStyledView,
    ParentGuideContainer,
    ViewHeading,
    ViewBy
} from '../components/StyledView';
import {
    StandardTextbox,
    InterpretationTextBox,
    SmallerStandardTextbox
} from '../components/CustomTextbox';
import { View } from 'react-native';
import GeometryBackground from '../components/GeometryBackground';

const StyledPress = styled.Pressable`
    align-self: stretch;
    position: relative;
`;
const SearchBar = styled.TextInput`
    border-radius: 5px;
    background-color: white;
    font-size: 13px;
    font-family: Avenir;
    line-height: 18px;
    align-self: stretch;
    margin: 0 20px;
    padding: 5px 30px 5px 10px;
    z-index: 2;
`;

export const StyledView = styled.View``;

const AutoMatch = styled.Text`
    padding-left: 15px;
    margin: 7.5px 0;
    font-size: 21px;
    font-family: Avenir;
    line-height: 28.69px;
    font-weight: 400;
    align-content: center;
`;

const MatchBorder = styled.View`
    border-top-color: black;
    border-top-width: 1px;
`;

const StyledList = styled.FlatList`
    background-color: white;
    margin: 0 23px;
    margin-top: -2px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const SearchBarContainer = styled.View`
    width: 100%;
    margin: 15px 0px;
`;

const TextContainerParentGuide = styled.View`
    margin-top: 10px;
`;

const InformationContainer = styled.View`
    margin-bottom: 50px;
`;

const SearchBarComponent = ({ navigation }) => {
    const [input, setInput] = useState('');
    useEffect(() => {
        setOutput(find(input));
    }, [input]);
    const [past, setPast] = useState({});
    const [pastCat, setPastCat] = useState({});
    const [output, setOutput] = useState('');

    const find = str_to_match => {
        if (!str_to_match) return [];
        let prev = str_to_match.slice(0, -1).toLowerCase();
        let options;
        let cat_options;
        if (prev.length > 0) {
            if (prev in past) {
                options = qs.filter(q => past[prev].includes(q.Question));
            }
            if (prev in pastCat) cat_options = pastCat[prev];
        }
        if (options === undefined || cat_options === undefined) {
            options = qs;
            cat_options = {};
            qs.map(q => {
                if (q.Category != '') {
                    cat_options[q.Category] = {
                        text: q.Category,
                        isGroup: false,
                        isQ: false
                    };
                }
                q.Group.split('|').map(
                    g =>
                    (cat_options[g] = {
                        text: g,
                        isGroup: true,
                        isQ: false
                    })
                );
            });
            cat_options = Object.values(cat_options);
        }
        let reg_ex = new RegExp(str_to_match, 'i');
        let auto_complete = new Set();
        let matches = new Set(
            options.filter(o => {
                let question =
                    o.Question.match(reg_ex) &&
                    auto_complete.add({
                        text: o.Question,
                        isQ: true,
                        question: o
                    });
                let follow =
                    o['Follow Up'].length > 0 &&
                    o['Follow Up'].split('|').reduce(
                        (bool, q) =>
                            (q.match(reg_ex) &&
                                auto_complete.add({
                                    text: q,
                                    isQ: true,
                                    question: o
                                })) ||
                            bool,
                        false
                    );
                return question || follow;
            })
        );
        let cat_matches = new Set(
            cat_options.filter(
                cat => cat.text.match(reg_ex) && auto_complete.add(cat)
            )
        );
        setPast(prevState => ({
            ...prevState,
            [str_to_match.toLowerCase()]: [...matches].map(m => m.Question)
        }));
        setPastCat(prevState => ({
            ...prevState,
            [str_to_match.toLowerCase()]: [...cat_matches]
        }));
        return [...auto_complete];
    };
    return (
        <SearchBarContainer>
            <StatusBar style="light" />
            <SearchBar
                placeholder="Search by specific question..."
                style={{
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 3,
                    shadowOpacity: 0.25
                }}
                onChangeText={setInput}
                onEndEditing={() => setOutput('')}
                returnKeyType="search"
                onFocus={even => setOutput(find(even.nativeEvent.text))}
                onSubmitEditing={() => {
                    if (output.length > 0) {
                        output[0].isQ
                            ? navigation.navigate('Parent Guide Information', {
                                question: output[0].question
                            })
                            : navigation.navigate('Parent Guide by Category', {
                                filter: output[0].text,
                                isGroup: output[0].isGroup
                            });
                    }
                }}
                clearButtonMode="while-editing"
            />
            <StyledList
                data={output.slice(0, 7)}
                keyExtractor={q => q.text}
                extraData={output}
                keyboardShouldPersistTaps={'handled'}
                renderItem={({ item }) => (
                    <StyledPress
                        onPress={() =>
                            item.isQ
                                ? navigation.navigate(
                                    'Parent Guide Information',
                                    {
                                        question: item.question
                                    }
                                )
                                : navigation.navigate(
                                    'Parent Guide by Category',
                                    {
                                        filter: item.text,
                                        isGroup: item.isGroup
                                    }
                                )
                        }
                    >
                        <MatchBorder>
                            <AutoMatch>{`${item.text}`}</AutoMatch>
                        </MatchBorder>
                    </StyledPress>
                )}
            />
        </SearchBarContainer>
    );
};

const CategoryButtonDisplay = (buttonObjects, isGroup) => {
    let list = [];
    buttonObjects.forEach(buttonObject => {
        list.push(
            <CustomButton
                key={buttonObject.text}
                text={
                    isGroup
                        ? buttonObject.text
                        : buttonObject.text.toUpperCase()
                }
                color={buttonObject.color}
                minHeight={BIG_MIN_HEIGHT_BUTTON}
                onPress={() =>
                    buttonObject.navigation.navigate(
                        buttonObject.onPressDestination,
                        {
                            filter: buttonObject.text,
                            isGroup: isGroup
                        }
                    )
                }
            />
        );
    });
    return list;
};

const QuestionButtonDisplay = buttonObjects => {
    let list = [];
    buttonObjects.forEach(buttonObject => {
        list.push(
            <CustomButton
                key={buttonObject.text}
                text={buttonObject.text}
                color={buttonObject.color}
                isCategoryQuestion={true}
                minHeight={BIG_MIN_HEIGHT_BUTTON}
                onPress={() =>
                    buttonObject.navigation.navigate(
                        buttonObject.onPressDestination,
                        {
                            question: buttonObject.data
                        }
                    )
                }
            />
        );
    });
    return list;
};

export const ParentGuideByCategory = ({ route, navigation }) => {
    const cat_filter = route.params.filter;
    const isGroup = route.params.isGroup;
    const buttonComponents = [];

    const questions = qs.filter(data => {
        return isGroup
            ? data.Group.toLowerCase()
                .split('|')
                .includes(cat_filter.toLowerCase())
            : data.Category.toLowerCase() === cat_filter.toLowerCase();
    });

    questions.map(data =>
        buttonComponents.push({
            text: data.Question,
            color: data.Category.toLowerCase(),
            onPressDestination: 'Parent Guide Information',
            navigation: navigation,
            data: data
        })
    );
    const headingText = isGroup ? cat_filter : questions[0].Category;
    return (
        <ParentGuideContainer>
            <GeometryBackground />
            {SearchBarComponent({ navigation })}
            <ViewBy editable={false} multiline={true}>
                {' '}
                {headingText}{' '}
            </ViewBy>
            <ScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
            >
                {QuestionButtonDisplay(buttonComponents)}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

const getGroupInterpretationAndCategory = navigation => {
    let groupInterpretations = new Set();
    let categories = new Set();

    // get unique categories and group interpretations
    qs.forEach(question => {
        categories.add(question.Category);
        const splitGroupInterpretation = question.Group.split('|');
        splitGroupInterpretation.forEach(tmpGroupInterpretation => {
            if (tmpGroupInterpretation != '') {
                groupInterpretations.add(tmpGroupInterpretation);
            }
        });
    });

    // construct objects from unique topics
    let groupInterpretationTopics = [];
    let categoriesTopics = [];
    groupInterpretations.forEach(topic => {
        groupInterpretationTopics.push({
            text: topic,
            color: 'CMDTurquoise',
            onPressDestination: 'Parent Guide by Category',
            navigation: navigation
        });
    });

    categories.forEach(topic => {
        categoriesTopics.push({
            text: topic.toLowerCase(),
            color: topic.toLowerCase(),
            onPressDestination: 'Parent Guide by Category',
            navigation: navigation
        });
    });
    return [groupInterpretationTopics, categoriesTopics];
};

export const ParentGuide = ({ navigation }) => {
    const [isGroup, setIsGroup] = useState(false);
    const questionTopics = getGroupInterpretationAndCategory(navigation);
    const groupInterpretationTopics = questionTopics[0];
    const categories = questionTopics[1];

    return (
        <ParentGuideContainer>
            <GeometryBackground />
            {SearchBarComponent({ navigation })}
            <ViewHeading> View By: </ViewHeading>
            <StyledPress onPress={() => setIsGroup(!isGroup)}>
                <View pointerEvents="none">
                    <ViewBy
                        editable={false}
                        style={{ textAlign: isGroup ? 'left' : 'center' }}
                    >
                        {isGroup ? 'Grouped Interpretations' : 'Category'}
                    </ViewBy>
                </View>
            </StyledPress>
            <ScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
                showsVerticalScrollIndicator={false}
            >
                {CategoryButtonDisplay(
                    isGroup ? groupInterpretationTopics : categories,
                    isGroup
                )}
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};

export const ParentGuideInformation = ({ route, navigation }) => {
    const category = route.params.question.Category;
    const question = route.params.question.Question;
    const interpretation = route.params.question.Interpretation;
    const group = route.params.question.Group;
    const color = category.toLowerCase();
    return (
        <ParentGuideContainer>
            <GeometryBackground />
            <ScrollStyledView
                directionalLockEnabled={true}
                contentContainerStyle={{ maxWidth: '99.9%' }}
            >
                <InformationContainer>
                    <StandardTextbox
                        text={category.toLowerCase()}
                        color={color}
                    ></StandardTextbox>
                    <TextContainerParentGuide>
                        <SmallerStandardTextbox
                            text={question.toLowerCase()}
                            color={color}
                        ></SmallerStandardTextbox>
                    </TextContainerParentGuide>
                    <InterpretationTextBox
                        interpretationText={interpretation}
                        groupText={group}
                        color={color}
                    ></InterpretationTextBox>
                    <CustomButton
                        text="done"
                        color={color}
                        minHeight={BIG_MIN_HEIGHT_BUTTON}
                        onPress={() => navigation.pop()}
                    />
                </InformationContainer>
            </ScrollStyledView>
        </ParentGuideContainer>
    );
};
