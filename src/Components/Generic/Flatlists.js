import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { styles } from '../Screens/styles'


const Flatlists = (props) => {
  const text = (Name, content) =>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginVertical: 5 }}>
    <Text style={styles.text}>{Name}</Text>
    <Text style={styles.col}>:</Text>
    <Text style={styles.text}>{content}</Text>
  </View>
  const Item = ({ index, categoryName, navigation, id }) => {
    arr.push(id);
    const [Index, setIndex] = useState(0);
    // useEffect(() => {
    //   if (select == 1) {
    //     if (indexValues.indexOf(index) == -1) {
    //       indexValues.push(index);
    //     }
    //     count = filterData.length;
    //     long = 1;
    //     if (index == filterData.length - 1) {
    //       Snackbar.show({
    //         text: 'Delete Item',
    //         duration: Snackbar.LENGTH_INDEFINITE,
    //         action: {
    //           text: 'DELETE',
    //           textColor: '#e90c59',
    //           onPress: () => {
    //             if (indexValues.length != 0) {
    //               SnackBar = 1;
    //             }
    //           },
    //         },
    //       })
    //     }
    //     setIndex(!Index);

    //   }
    //   if (select == 0) {
    //     indexValues = [];
    //     count = 0;
    //     long = 0;
    //     Snackbar.dismiss();
    //     setIndex(!Index);
    //   }

    // }, []);

    const onLongPressButton = () => {

      let idxValues = indexValues.indexOf(index);

      long = 1;
      if (idxValues > -1) {
        indexValues.splice(idxValues, 1);
        idValues.splice(idxValues, 1);
        count = count - 1;
        setIndex(!Index);
      }
      else {
        indexValues.push(index);
        idValues.push(id);
        count = count + 1;
        setIndex(!Index);
      }
      if (indexValues.length === 0) {
        long = 0;
        count = 0;
        SnackBar = 0;
        setselect(-1);
        Snackbar.dismiss();
      }
      if (select == 1) {
        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    };

    const onPress = () => {

      if (long === 1) {
        if (indexValues.indexOf(index) == -1) {
          count = count + 1;
          indexValues.push(index);
          idValues.push(id);
          setIndex(!Index);
        } else {
          let id = indexValues.indexOf(index);
          if (id > -1) {
            indexValues.splice(id, 1);
            idValues.splice(id, 1);
            count = count - 1;
            if (indexValues.length === 0) {
              long = 0;
              count = 0;
              SnackBar = 0;
              Snackbar.dismiss();
            }
          }
          setIndex(!Index);
        }
      } else {
        setEdit(true);
        setupdateID(id);
        console.log(id);
        // navigation.navigate('AddItem', { ID: id ,token:token});
      }
      if (select == 1) {

        setselect(-1);
      }
      { indexValues.length == 0 ? setarray([]) : setarray(indexValues) }
    }
    return (
      // #ffffe0
      <TouchableWithoutFeedback
        onLongPress={onLongPressButton}
        onPress={onPress}
      >
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", backgroundColor: back }}>
          <View key={index} style={[styles.itemListItem, { width: '85%' }]}>
            <View style={{ height: '100%', width: '100%', justifyContent: "center", backgroundColor: '#fff' }}>
              {text('categoryName', categoryName.toUpperCase())}
              {indexValues.indexOf(index) == -1 ? null
                : <View style={{ height: '100%', width: "100%", justifyContent: 'center', alignItems: 'center', position: 'absolute', right: '-48%', top: '-40%' }}>
                  <View style={{ height: 25, width: 25, backgroundColor: 'lightgreen', borderRadius: 50, zIndex: 100 }}></View>
                </View>}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* {console.log(item.id)} */}
          <Item
            index={index}
            categoryName={item.categoryName}
            navigation={navigation}
            id={item.id}
          />
        </View>
      </>
    );
  };
  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <FlatList
    data={Post}
    renderItem={({ item, index }) => renderItem({ navigation, item, index })}
    keyExtractor={keyExtractor}
  />
  )
}

export default Flatlists