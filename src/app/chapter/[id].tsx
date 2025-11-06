import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import chapterData from '@/src/data/chapterData';
import AppView from '../components/AppView';

export default function ChapterDetails() {
  const { id } = useLocalSearchParams();
  const chapter = chapterData.find(chap => chap.id === (id as string));

  if (!chapter) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Chapter not found</Text>
      </View>
    );
  }

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'wordMeaning':
        return (
          <View key={index} className="mb-8">
            <Text className="text-2xl font-semibold mb-3 text-green-700">{section.title}</Text>

            {section.questions?.map((q: any) => (
              <View key={q.id} className="mb-4">
                <Text className="text-lg font-bold mb-2">{q.question}</Text>

                {/* Render answers array if exists */}
                {q.answers?.length > 0 && (
                  <View className="flex flex-col gap-2">
                    {q.answers.map((a: any, i: number) => (
                      <View key={i} className="flex-row justify-between items-center bg-gray-100 p-2 rounded-lg">
                        <Text className="text-lg w-[60%]">
                          {a.sub ? `${a.sub}. ` : ''}
                          {a.question}
                        </Text>
                        <Text className="text-lg font-semibold text-green-700 w-[35%] text-right">
                          {a.answer}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                {/* Render paragraph if exists */}
                {q.paragraph && <Text className="mt-2 text-black text-lg">{q.paragraph}</Text>}

                {/* Render synonyms array if exists */}
                {q.synonyms?.length > 0 && (
                  <View className="mt-2">
                    {q.synonyms.map((s: any, j: number) => (
                      <Text key={j} className="text-lg text-black">
                        • {s.word1} — {s.word2}
                      </Text>
                    ))}
                  </View>
                )}

                {/* Render synonymsList array if exists */}
                {q.synonymsList?.length > 0 && (
                  <View className="mt-2">
                    {q.synonymsList.map((s: any, j: number) => (
                      <Text key={j} className="text-lg text-black">
                        • {s.word} — {s.synonym}
                      </Text>
                    ))}
                  </View>
                )}
                {/* Render example string if exists */}
                {q.example && (
                  <Text className="mt-2 italic text-gray-600">{q.example}</Text>
                )}

                {/* Render antonyms array if exists */}
                {q.antonyms?.length > 0 && (
                  <View className="mt-2">
                    {q.antonyms.map((a: any, j: number) => (
                      <Text key={j} className="text-lg text-black">
                        • {a.word} — {a.opposite}
                      </Text>
                    ))}
                  </View>
                )}

                {/* Render examples array if exists */}
                {q.examples?.length > 0 && (
                  <View className="mt-2 space-y-1">
                    {q.examples.map((ex: string, idx: number) => (
                      <Text key={idx} className="text-lg text-black">
                        • {ex}
                      </Text>
                    ))}
                  </View>
                )}

              </View>
            ))}
          </View>
        );

      case 'comprehension':
        return (
          <View key={index} className="mb-8">
            <Text className="text-2xl font-semibold mb-3 text-orange-700">{section.title}</Text>

            {section.questions?.map((q: any) => (
              <View key={q.id} className="bg-gray-50 p-3 mb-4 rounded-xl border border-gray-200">
                {q.verse && <Text className="italic mb-2 text-gray-600">{q.verse}</Text>}
                <Text className="text-base font-medium mb-2">{q.question}</Text>

                {/* If subQuestions exist, render those */}
                {q.subQuestions ? (
                  q.subQuestions.map((subQ: any, idx: number) => (
                    <View key={idx} className="mb-3">
                      <Text className="font-semibold text-lg">
                        {subQ.sub ? `${subQ.sub}. ` : ''}
                        {subQ.question}
                      </Text>
                      {Array.isArray(subQ.answer) ? (
                        subQ.answer.map((ans: string, i: number) => (
                          <Text key={i} className="ml-6 text-gray-700 text-lg">
                            • {ans}
                          </Text>
                        ))
                      ) : typeof subQ.answer === 'object' ? (
                        Object.entries(subQ.answer).map(([key, val]) => (
                          <Text key={key} className="ml-6 text-gray-700 text-lg">
                            • {key}: {String(val)}
                          </Text>
                        ))
                      ) : (
                        <Text className="ml-6 text-gray-700 text-lg">{subQ.answer}</Text>
                      )}
                    </View>
                  ))
                ) : (
                  <Text className="text-gray-700 text-lg">{q.answer}</Text>
                )}
              </View>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView className="bg-white flex-1 px-4" contentContainerClassName="py-5">
      <AppView isNewView={true}>
        <Text className="text-base text-center mb-6 text-gray-600">लेखक: {chapter.writer}</Text>

        {/* Render all sections dynamically */}
        {chapter.sections.map((section, i) => renderSection(section, i))}
      </AppView>
    </ScrollView>
  );
}
