import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  tableContainer: {
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  tableRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'black',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: 'black',
    paddingVertical: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%', 
    height: windowHeight * 0.3, 
  },
});

export default styles;
