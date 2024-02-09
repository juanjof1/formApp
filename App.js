import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase';
import './config/firebase';
import 'react-native-gesture-handler';




const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  
  const handleEnviar = () => {
    // Guardar el usuario en la base de datos
    firebase.database().ref('usuarios').push({
      nombre,
      apellido,
      genero,
    })
    .then(() => {
      Alert.alert('Exito', 'Usuario agregado correctamente');
      // Limpiar los campos del formulario después de enviar
      setNombre('');
      setApellido('');
      setGenero('');
    })
    .catch(error => {
      console.error('Error al agregar usuario: ', error);
      Alert.alert('Error', 'Hubo un problema al agregar el usuario');
    });
  };

  const handleEliminarUsuario = () => {
    // Eliminar el último usuario agregado de la base de datos
    firebase.database().ref('usuarios').orderByKey().limitToLast(1).once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        childSnapshot.ref.remove()
        .then(() => {
          Alert.alert('Exito', 'Usuario eliminado correctamente');
        })
        .catch(error => {
          console.error('Error al eliminar usuario: ', error);
          Alert.alert('Error', 'Hubo un problema al eliminar el usuario');
        });
      });
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <Text>Selecciona tu género:</Text>
      <Picker
        selectedValue={genero}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>
          setGenero(itemValue)
        }>
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Femenino" value="femenino" />
      </Picker>
      <Button title="Enviar Formulario" onPress={handleEnviar} />
      <Button title="Eliminar Último Usuario" onPress={handleEliminarUsuario} />
    </View>
  );
};

export default Formulario;
