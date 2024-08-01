import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import { comments, posts } from '../../services/api/post.ts';
import { CombinedItem, Comment, Post } from '../../types/types.ts';
import PostImage from '../../assets/icon/postImage.svg';
import Arrow from '../../assets/icon/Vector.svg';
import { useTranslation } from 'react-i18next';

const Posts = ({ navigation }) => {
  const [combinedData, setCombinedData] = useState<CombinedItem[]>([]);
  const { t } = useTranslation();
  const style = styles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await posts();
        const commentsResponse = await comments();

        const postsArray = Array.isArray(postResponse)
          ? postResponse
          : [postResponse];
        const commentsArray = Array.isArray(commentsResponse)
          ? commentsResponse
          : [commentsResponse];

        const combinedArray: CombinedItem[] = [
          { type: 'post', data: postsArray[0] },
          ...commentsArray.map(comment => ({ type: 'comment', data: comment })),
        ];

        setCombinedData(combinedArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({
    item,
    index,
  }: {
    item: CombinedItem;
    index: number;
  }) => {
    if (item.type === 'post') {
      const post = item.data as Post;
      return (
        <>
          <View style={style.flatContainer}>
            <Text style={style.textPost}>{t('About')}</Text>
          </View>
          <View style={style.postContainer}>
            <Text style={style.headerText}>{post.title}</Text>
            <Text style={style.childPostText}>{post.body}</Text>
          </View>
        </>
      );
    } else {
      const comment = item.data as Comment;
      const showCommentsHeader = index === 1;
      return (
        <>
          {showCommentsHeader && (
            <View style={style.flatContainer}>
              <Text style={style.textPost}>{t('Comments')}</Text>
            </View>
          )}
          <View style={style.postContainer}>
            <Text style={style.headerText}>{comment.name}</Text>
            <Text style={style.testHeaderText}>{comment.email}</Text>
            <Text style={style.childPostText}>{comment.body}</Text>
          </View>
        </>
      );
    }
  };

  return (
    <>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <Arrow />
        </TouchableOpacity>
        <View style={style.container}>
          <Text style={style.title}>{t('PostName')}</Text>
          <PostImage style={style.image} />
        </View>
      </View>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.type}-${index}`}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Posts;
