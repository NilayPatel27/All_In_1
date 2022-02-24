import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {SearchBar} from 'react-native-elements';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import { List } from 'react-native-paper';




const SearchBarScreen = () => {
  const [SearchQ, setSearchQ] = useState(''); //for search bar input
  const [CopyPost, setCopyPost] = useState(''); // for show copy post
  const [Post, setPost] = useState([]); // set Api data
  const [Error, setError] = useState(''); // set error

  const [UserId, setUserId] = useState(0); // set user id
  const [Id, setId] = useState(0); // set post id
  const [Title, setTitle] = useState(''); // set post title
  const [Body, setBody] = useState(''); // set post body

  // const [Term, setTerm] = useState('');

  //call API DATA at start
  useEffect(() => {
    console.log('DataBase Connected');
    getPost();
  }, []);

  //call API DATA
  const getPost = () => {
    axios.get('http://localhost:8081/AllData').then(res => {
      if (res.data.length > 0) {
        setPost(res.data);
        setCopyPost(res.data);
      } else {
        setPost([]);
        setError('No Post Found');
      }
    });
  };

  //DELETE DATA
  const deletePost = ID => {
    let str = 'http://localhost:8081/AllData/' + ID;
    axios
      .delete(str)
      .then(getPost());
  };

  //POST DATA
  const sandPost = () => {
    let add = {
      userId: UserId,
      id: Id,
      title: Title,
      body: Body,
    };
    axios
      .post('http://localhost:8081/AllData', add)
      .then(response => console.log(response.data));
  };

  //UPDATE DATA
  const updatePost = ID => {
    let update = {
      userId: UserId,
      id: Id,
      title: Title,
      body: Body,
    };
    let url = 'http://localhost:8081/AllData/' + ID;
    axios.put(url, update).then(response => console.log(response.data));
  };

  //RENDER SERACH BAR DATA
  const renderPost = ({item}) => {
    return (
      <>
      <View style={styles.itemPage}>
        <Text style={styles.itemTitle}>
          {item.id}. {item.title}
        </Text>
        <Text style={styles.itemBody}>{item.body}</Text>
      </View>
      </>
    );
  };

  //CHANGE DATA WITH SEARCH BAR INPUT
  const onChangeSearch = text => {
    if (text.trim()) {
      const newData = CopyPost.filter(item => {
        const itemData =
          item.title + item.body + item.id
            ? item.title.trim().toLowerCase() + item.body.trim().toLowerCase()
            : ''.toUpperCase();
        const textData = text.trim().toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setPost(newData);
      setSearchQ(text);
      
    } else{
      setPost(CopyPost);
      setSearchQ(text);
      
      
    }
  };

  // const onSeachEnter=(SearchQ)=> {
  //   setTerm(SearchQ);
  // }


  return (
    <>
      {/* SEARCH BAR */}
      <View style={styles.view}>
        <SearchBar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={SearchQ}
          // onEndEditing={() => onSeachEnter()}
        />


    <List.AccordionGroup>
    <List.Accordion title="API OPRATIONS" id="1">
        {/* INPUT FORM */}
        <View style={styles.mainbox}>
          <Text style={styles.labelText}>User Id:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter UserId"
            onChangeText={UserId => setUserId(UserId)}
            defaultValue={UserId}
          />
          <Text style={styles.labelText}>Id :</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Id"
            onChangeText={Id => setId(Id)}
            defaultValue={Id}
          />
          <Text style={styles.labelText}> Title:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Title"
            onChangeText={Title => setTitle(Title)}
            defaultValue={Title}
          />
          <Text style={styles.labelText}>Body:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Body"
            onChangeText={Body => setBody(Body)}
            defaultValue={Body}
          />
        </View>

        {/* ALL BUTTON */}
        <View>
          <Button onPress={() => sandPost(Id)} title="SendPost" />
        </View>

        <View>
          <Button onPress={() => updatePost(Id)} title="updatePost" />
        </View>

        <View>
          <Button onPress={() => deletePost(Id)} title="deletePost" />
        </View>
        </List.Accordion>
        </List.AccordionGroup>

        
        {/* SHOW DATA */}
        {/* <View>
        {Post.length==0?<Text style={styles.error}>No Data Found</Text>:
          <FlatList
            data={Post}
            renderItem={renderPost}
            keyExtractor={Post => Post.id}
          />}
        </View>
         */}
         {console.log(Post[0]['user'][0]['nilay._.patel'])}
      </View>
    </>
  );
};

export default SearchBarScreen;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  itemPage: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontSize: 32,
  },

  itemBody: {
    fontSize: 18,
  },

  mainbox: {
    textAlign: 'center',
    margin: 15,
    justifyContent: 'space-between',
  },
  cardbox: {
    margin: 10,
  },
  labelText: {
    marginTop: 10,
    marginBottom: 5,
  },
  inputText: {
    height: 45,
    marginBottom: 15,
  },
  error:{
    color:'red',
    fontSize:20,
    margin:10,
  }
});
