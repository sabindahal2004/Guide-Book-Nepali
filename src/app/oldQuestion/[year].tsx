import React from 'react';
import {Image, View, FlatList, Dimensions} from 'react-native';
import oldQuestions from '../data/oldQnData';
import NetworkBanner from '../components/NetworkBanner';

const {width} = Dimensions.get('window');

const OldQuestionScreen = () => {
  return (
    <>
      <NetworkBanner />
      <FlatList
        data={oldQuestions}
        keyExtractor={item => item.year.toString()}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingVertical: 10, backgroundColor: 'white'}}
        renderItem={({item}) => (
          <View className="mb-10">
            {item.pages.map(page => (
              <View key={page.id} className="items-center mb-5">
                <Image
                  source={page.image}
                  resizeMode="contain"
                  style={{
                    width: width * 0.95,
                    height: undefined,
                    aspectRatio: 0.7,
                  }}
                />
              </View>
            ))}
          </View>
        )}
      />
    </>
  );
};

export default OldQuestionScreen;
