import React, {useContext, useEffect, useState} from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style.ts';
import {Apilogin} from '../../services/api/auth.ts';
import { posts } from '../../services/api/post.ts';
import { Post } from '../../types/types.ts';
import ListHeaderComponent from './listHeaderComponent.tsx';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../auth/AuthContext.tsx";

const Dashboard = () => {
  const [postData, setPostData] = useState<Post[]>([]);
  const { state } = useContext(AppContext);
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

  const renderItem = ({ item }: { item: Post }) => (
    <View style={style.postContainer}>
      <Text style={style.headerText}>{item.title}</Text>
      <Text style={style.childPostText}>{item.body}</Text>
    </View>
  );

  return (
    <>
      <View style={style.header}>
        <Text style={style.childText}>Your name</Text>
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
