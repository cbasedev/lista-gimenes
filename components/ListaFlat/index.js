import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import tick from './assets/tick.png';
import trash from './assets/trash.png';
import uncheck from './assets/uncheck.png';

export default function ListaFlat(props) {

    const { itemList, onHandlerModal, onHandlerCompleteItem } = props
    
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <View style={styles.item}>   
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>  
                    <View style={styles.buttons}> 
                        <TouchableOpacity onPress={() => onHandlerCompleteItem(data.item.id)}>
                            <Image source={data.item.completed ? tick : uncheck } style={{ width: 24, height: 24 }} /> 
                        </TouchableOpacity>      
                        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)}>
                            <Image source={trash} style={{ width: 24, height: 24 }} /> 
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderTopColor : '#f6f6f6',
        borderRightColor : '#f6f6f6',
        borderLeftColor : '#d5d5d5',
        borderBottomColor : '#d5d5d5',
        marginTop: '5%',
        height: 45,
        paddingLeft: 20,
        paddingTop: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',   
        width: 60     
    }
})