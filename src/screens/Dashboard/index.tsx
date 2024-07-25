import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style.ts';
import { login } from '../../services/api/auth.ts';
import { posts } from '../../services/api/post.ts';
import { Post } from '../../types/types.ts';
import ListHeaderComponent from './listHeaderComponent.tsx';

const Dashboard = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastname] = useState<string>('');
  const [postData, setPostData] = useState<Post[]>([]);
  const style = styles();

  useEffect(() => {
    getInfo();
    getPosts();
  }, []);
  const getInfo = async () => {
    try {
      const loginResponse = await login('emilys', 'emilyspass');
      setName(loginResponse.firstName);
      setLastname(loginResponse.lastName);
    } catch (error) {}
  };

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
        <Text style={style.title}>{`${name} ${lastName}`}</Text>
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
