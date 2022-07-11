import { StyleSheet, View } from 'react-native';

import AddItem from './components/AddItem';
import CustomModal from './components/Modal';
import ListaFlat from './components/ListaFlat';
import { useState } from 'react';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text);

  const onHandlerDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerAddItem = (id) => {
    setItemList(currentItems => [...currentItems, 
                               { id: Date.now(), value: textItem, completed: false}])
    setTextItem('')
  }
  
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = !itemList[itemCompleted].completed
    setItemList([...itemList])
  }

  return (
  
    <View style={styles.screen}>

      <CustomModal
        modalVisible={modalVisible} 
        itemSelected={itemSelected} 
        onHandlerDeleteItem={onHandlerDeleteItem}
      />

      <AddItem
      textItem={textItem}
      onHandlerChangeItem={onHandlerChangeItem}
      onHandlerAddItem={onHandlerAddItem}
      />

      <ListaFlat
       itemList={itemList}
       onHandlerModal={onHandlerModal}  
       onHandlerCompleteItem={onHandlerCompleteItem}
      />

    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    padding: 30, 
    backgroundColor: '#f6f6f6'
  }

})