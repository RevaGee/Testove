import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import { login } from '../../services/api/auth.ts';
import { posts } from '../../services/api/post.ts';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Dashboard = () => {
  const style = styles();
  const [name, setName] = useState<string>('');
  const [lastName, setLastname] = useState<string>('');
  const [postData, setPostData] = useState([]);

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
      console.log(postResponse);
      setPostData(postResponse);
    } catch (error) {}
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
      <View style={style.container}>
        <View style={style.textInputContainer}>
          <View style={style.childContainer}>
            <View style={style.icon} />
            <Text style={style.textContainer}>John doe</Text>
          </View>

          <View style={style.inputContainer}>
            <TouchableOpacity onPress={getPosts}>
              <View style={style.childContainer}>
                <Text style={style.textContainer}>Name</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={style.textPost}>Posts</Text>
            <FlatList data={postData} renderItem={renderItem} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
