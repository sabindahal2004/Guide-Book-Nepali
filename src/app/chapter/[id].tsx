import {db} from '@/config/firebaseConfig';
import {useLocalSearchParams} from 'expo-router';
import {doc, getDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import AppView from '../components/AppView';
import chapterData from '@/src/data/chapterData';

export default function ChapterDetails() {
  const {id} = useLocalSearchParams();
  const chapter = chapterData.find((chap) => chap.id === id);
  // const [chapter, setChapter] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // For debugging purposes
  // useEffect(() => {
  //   console.log('📘 Received Chapter ID:', id);
  //   fetchChapterDetails();
  // }, [id]);

  // 🔹 Fetch chapter details from Firestore
  // const fetchChapterDetails = async () => {
  //   try {
  //     if (!id) return;

  //     const docRef = doc(db, 'chapterDetails', id as string);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setChapter({
  //         id: docSnap.id,
  //         ...docSnap.data(),
  //       });
  //     } else {
  //       console.warn('⚠️ Chapter not found');
  //       setChapter(null);
  //     }
  //   } catch (error) {
  //     console.error('❌ Error fetching chapter:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchChapterDetails();
  // }, [id]);

  // 🔹 Show loading indicator while fetching
  // if (loading) {
  //   return (
  //     <View className="flex-1 justify-center items-center bg-white">
  //       <ActivityIndicator size="large" color="#2563EB" />
  //       <Text className="mt-3 text-gray-600 text-base">Loading chapter...</Text>
  //     </View>
  //   );
  // }

  // 🔹 Show message if chapter not found
  if (!chapter) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Chapter not found</Text>
      </View>
    );
  }

  // 🔹 Render Section Based on Type
  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'wordMeaning':
        return (
          <View key={index} className="mb-8">
            <Text className="text-2xl font-semibold mb-3 text-green-700">
              {section.title}
            </Text>

            {section.questions?.map((q: any) => (
              <View key={q.id} className="mb-4">
                <Text className="text-xl font-bold mb-2">{q.question}</Text>

                {/* Render answers array if exists */}
                {q.answers?.length > 0 && (
                  <View className="flex flex-col gap-2">
                    {q.answers.map((a: any, i: number) => (
                      <View
                        key={i}
                        className="flex-row justify-between items-center bg-gray-100 p-2 rounded-lg">
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

                {/* Render subQuestions or subQuestion in Q&A style */}
                {(q.subQuestions?.length > 0 || q.subQuestion?.length > 0) && (
                  <View className="mt-2 ml-2">
                    {(q.subQuestions || q.subQuestion).map(
                      (subQ: any, i: number) => (
                        <View key={i} className="mb-3">
                          <Text className="font-semibold text-lg text-black">
                            {subQ.sub ? `${subQ.sub}. ` : ''}
                            {subQ.question}
                            <Text className="font-medium text-gray-600 text-base italic">
                              {' '}
                              {subQ.meaning}
                            </Text>
                          </Text>
                          <Text className="ml-6 mt-1 text-lg text-gray-600">
                            उत्तर:{' '}
                            <Text className="font-medium text-black text-lg">
                              {subQ.answer}
                            </Text>
                          </Text>
                        </View>
                      ),
                    )}
                  </View>
                )}

                {/* Render paragraph if exists */}
                {q.paragraph && (
                  <Text className="mt-2 text-black text-lg">{q.paragraph}</Text>
                )}

                {/* Render example string if exists */}
                {q.example && (
                  <Text className="mt-2 italic text-gray-600 text-lg">
                    {q.example}
                  </Text>
                )}
                {/* Render answer if exists */}
                {q.answer && (
                  <Text className="mt-2 text-black text-lg">{q.answer}</Text>
                )}

                {/* Render synonyms array if exists */}
                {q.synonyms?.length > 0 && (
                  <View className="mt-2">
                    {q.synonyms.map((s: any, j: number) => (
                      <Text key={j} className="ml-6 mt-1 text-lg text-gray-600">
                        उत्तर:{' '}
                        <Text className="font-medium text-black text-lg">
                          {s.word1} — {s.word2}
                        </Text>
                      </Text>
                    ))}
                  </View>
                )}

                {/* Render synonymsList array if exists */}
                {q.synonymsList?.length > 0 && (
                  <View className="mt-2">
                    {q.synonymsList.map((s: any, j: number) => (
                      <Text key={j} className="ml-6 mt-1 text-lg text-gray-600">
                        उत्तर:{' '}
                        <Text className="font-medium text-black text-lg">
                          {s.word} — {s.synonym}
                        </Text>
                      </Text>
                    ))}
                  </View>
                )}

                {/* Render antonyms array if exists */}
                {q.antonyms?.length > 0 && (
                  <View className="mt-2">
                    {q.antonyms.map((a: any, j: number) => (
                      <Text key={j} className="ml-6 mt-1 text-lg text-gray-600">
                        उत्तर:{' '}
                        <Text className="font-medium text-black text-lg">
                          {a.word} — {a.opposite}
                        </Text>
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
            <Text className="text-2xl font-semibold mb-3 text-orange-700">
              {section.title}
            </Text>

            {section.questions?.map((q: any) => (
              <View key={q.id} className="mb-4">
                <Text className="text-xl font-bold mb-2">{q.question}</Text>

                {/* Render verse if exists */}
                {q.verse && (
                  <Text className="italic mb-2 text-gray-600 text-lg">
                    {q.verse}
                  </Text>
                )}

                {/* Render example string if exists */}
                {q.example && (
                  <Text className="mt-2 italic text-gray-600 text-lg">
                    {q.example}
                  </Text>
                )}

                {/* Render synonyms array if exists */}
                {q.synonyms?.length > 0 && (
                  <View className="mt-2">
                    {q.synonyms.map((s: any, j: number) => (
                      <Text key={j} className="ml-6 mt-1 text-lg text-gray-600">
                        उत्तर:{' '}
                        <Text className="font-medium text-black text-lg">
                          {s.word1} — {s.word2}
                        </Text>
                      </Text>
                    ))}
                  </View>
                )}

                {/* Render subSections if present */}
                {q.subSections &&
                  q.subSections.map((subSection: any, si: number) => (
                    <View key={si} className="mb-4">
                      {/* SubSection Title */}
                      <Text className="text-lg font-bold mb-2 text-black">
                        {subSection.title}
                      </Text>

                      {/* SubQuestions inside SubSection */}
                      {subSection.subQuestions?.map(
                        (subQ: any, subi: number) => (
                          <View key={subi} className="mb-2 ml-4">
                            <Text className="font-semibold text-lg">
                              {subQ.sub ? `${subQ.sub}. ` : ''}
                              {subQ.question}
                            </Text>

                            {/* Render answer which can be string, array or object */}
                            {Array.isArray(subQ.answer) ? (
                              subQ.answer.map((ans: string, ai: number) => (
                                <Text
                                  key={ai}
                                  className="ml-6 mt-1 text-lg text-gray-600">
                                  उत्तर:{' '}
                                  <Text className="font-medium text-black text-lg">
                                    {ans}
                                  </Text>
                                </Text>
                              ))
                            ) : typeof subQ.answer === 'object' ? (
                              Object.entries(subQ.answer).map(([key, val]) => (
                                // <Text
                                //   key={key}
                                //   className="ml-6 text-black text-lg">
                                //   • {key}:{' '}
                                //   <Text className="font-semibold">
                                //     {String(val)}
                                //   </Text>
                                // </Text>

                                <Text
                                  key={key}
                                  className="ml-6 mt-1 text-lg text-gray-600">
                                  उत्तर:{' '}
                                  <Text className="ml-6 text-black text-lg">
                                    {key}:{' '}
                                    <Text className="font-semibold">
                                      {String(val)}
                                    </Text>
                                  </Text>
                                </Text>
                              ))
                            ) : (
                              <Text className="ml-6 mt-1 text-lg text-gray-600">
                                {subQ.answer ? 'उत्तर : ' : ''}
                                <Text className="font-medium text-black text-lg">
                                  {subQ.answer}
                                </Text>
                              </Text>
                            )}
                          </View>
                        ),
                      )}
                    </View>
                  ))}

                {/* If no subSections, fallback to existing subQuestions */}
                {!q.subSections && q.subQuestions
                  ? q.subQuestions.map((subQ: any, idx: number) => (
                      <View key={idx} className="mb-3 ml-4">
                        <Text className="font-semibold text-lg">
                          {subQ.sub ? `${subQ.sub}. ` : ''}
                          {subQ.question}
                        </Text>
                        {Array.isArray(subQ.answer) ? (
                          subQ.answer.map((ans: string, i: number) => (
                            <Text key={i} className="ml-6 text-black text-lg">
                              • {ans}
                            </Text>
                          ))
                        ) : typeof subQ.answer === 'object' ? (
                          Object.entries(subQ.answer).map(([key, val]) => (
                            <Text
                              key={key}
                              className="ml-6 mt-1 text-lg text-gray-600">
                              उत्तर:{' '}
                              <Text className="ml-6 text-black text-lg">
                                {key}:{' '}
                                <Text className="font-semibold">
                                  {String(val)}
                                </Text>
                              </Text>
                            </Text>
                          ))
                        ) : (
                          <Text className="ml-6 mt-1 text-lg text-gray-600">
                            {subQ.answer ? 'उत्तर : ' : ''}
                            <Text className="font-medium text-black text-lg">
                              {subQ.answer}
                            </Text>
                          </Text>
                        )}
                      </View>
                    ))
                  : !q.subSections && (
                      <Text className="text-black text-lg">
                        <Text className="ml-6 mt-1 text-lg text-gray-600">
                          {q.answer ? 'उत्तर : ' : ''}
                          <Text className="font-medium text-black text-lg">
                            {q.answer}
                          </Text>
                        </Text>
                      </Text>
                    )}
                {/* Render paragraph if exists */}
                {q.paragraph && (
                  <Text className="mt-2 text-black text-lg">{q.paragraph}</Text>
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
    <ScrollView
      className="bg-white flex-1 px-4"
      contentContainerClassName="py-5"
      showsVerticalScrollIndicator={false}>
      <AppView isNewView={true}>
        <Text className="text-base text-center mb-6 text-gray-600">
          लेखक: {chapter.writer}
        </Text>

        {/* Render all sections dynamically */}
        {chapter.sections.map((section: any, i: number) =>
          renderSection(section, i),
        )}
      </AppView>
    </ScrollView>
  );
}
