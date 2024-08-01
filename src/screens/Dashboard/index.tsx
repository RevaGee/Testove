import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import { posts } from '../../services/api/post.ts';
import { Post } from '../../types/types.ts';
import ListHeaderComponent from './listHeaderComponent.tsx';
import AppContext from '../auth/AuthContext.tsx';
import {useTranslation} from "react-i18next";

const Dashboard = ({ navigation }) => {
  const [postData, setPostData] = useState<Post[]>([]);
  const { state } = useContext(AppContext);
  const { t } = useTranslation();
  const style = styles();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const postResponse = await posts();
      const postsArray = Array.isArray(postResponse)
        ? postResponse
        : [postResponse];

      setPostData(postsArray.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  const handler = () => {
    navigation.navigate('Post');
  };

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity onPress={handler} style={style.postContainer}>
      <Text style={style.headerText}>{item.title}</Text>
      <Text style={style.childPostText}>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={style.header}>
        <Text style={style.childText}>{t('YourName')}</Text>
        <Text style={style.title}>{`${state.name} ${state.lastName}`}</Text>
      </View>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={postData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Dashboard;
