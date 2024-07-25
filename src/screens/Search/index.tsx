import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import { posts } from '../../services/api/post.ts';
import { Post } from '../../types/types.ts';
import { styles } from './style.ts';

const Search = () => {
  const [search, setSearch] = useState('');
  const [postData, setPostData] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const style = styles();

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [search, postData]);

  const getPosts = async () => {
    try {
      const postResponse = await posts();
      setPostData(postResponse);
    } catch (error) {}
  };

  const filterPosts = () => {
    if (search) {
      const searchLower = search.toLowerCase();
      const [keyword, query] = searchLower.split(':').map(part => part.trim());

      setFilteredPosts(
        postData.filter(post => {
          switch (keyword) {
            case 'id':
              return `${post.id}`.toLowerCase().includes(query);
            case 'name':
              return `${post.title}`.toLowerCase().includes(query);
            default:
              return `${post.id} ${post.title}`
                .toLowerCase()
                .includes(searchLower);
          }
        }),
      );
    } else {
      setFilteredPosts(postData);
    }
  };

  const renderItem = ({ item }: { item: Post }) => (
    <View style={style.postContainer}>
      <Text style={style.flatText}>ID: {item.id}</Text>
      <Text style={style.childPostText}>Name: {item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Text style={style.headerText}>Search</Text>
        <View style={style.passwordContainer}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search Products.."
            returnKeyType="done"
            keyboardType="default"
            style={style.passwordTextIput}
          />
        </View>
        <FlatList data={filteredPosts} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
