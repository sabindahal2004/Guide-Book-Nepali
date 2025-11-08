import {Stack, useRouter} from 'expo-router';
import React from 'react';
import {FlatList} from 'react-native';
import oldQuestions from '@/src/data/oldQnData';
import Card from '../components/Card';

const OldQuestionScreen = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Old Questions (प्रश्नहरू)',
          headerShadowVisible: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
          animation: 'slide_from_right',
        }}
      />
      <FlatList
        data={oldQuestions}
        keyExtractor={item => item.year.toString()}
        renderItem={({item}) => (
          <Card
            icon="document"
            title={`Model Question ${item.year}`}
            minHeight={100}
            iconSize={50}
            description="It contains the SEE Model Question Papers of the year 2082."
            customBgColor={item.bgColor}
            onPress={() => router.push(`/oldQuestion/${item.year}`)}
          />
        )}
      />
    </>
  );
};

export default OldQuestionScreen;
