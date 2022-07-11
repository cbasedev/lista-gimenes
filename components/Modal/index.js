import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function CustomModal( props ){

    const {modalVisible, itemSelected, onHandlerDeleteItem} = props

    return (

        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.modalTitle}>
              <Text>
                Eliminar Tarea
              </Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>Por favor, confirme que desea eliminar el item</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text style={styles.modalItem}>{itemSelected.value}</Text>
            </View>
            <View style={styles.modalButton}>
              <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
            </View>
          </View>
        </View>
      </Modal>

    );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    height: "40%",
    borderRadius: 10,
    padding: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  modalTitle: {
    backgroundColor: "#ccc",
    color: "white",
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30,
  },
});