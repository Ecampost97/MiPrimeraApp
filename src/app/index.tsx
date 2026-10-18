import { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable, StyleSheet, Alert } from 'react-native';

export default function Index() {
  // Estados para capturar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [acepta, setAcepta] = useState(false);

  // Función de validación y registro
  const guardar = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Debe escribir su nombre');
      return;
    }

    if (correo.trim() === '') {
      Alert.alert('Error', 'Debe escribir su correo');
      return;
    }

    if (!correo.includes('@')) {
      Alert.alert('Error', 'El correo no es válido');
      return;
    }

    // Validaciones del reto: Edad obligatoria
    if (edad.trim() === '') {
      Alert.alert('Error', 'Debe escribir su edad');
      return;
    }

    if (!acepta) {
      Alert.alert('Error', 'Debe aceptar las condiciones');
      return;
    }

    // Confirmación exitosa con Nombre y Edad
    Alert.alert(
      'Registro correcto',
      `Bienvenido ${nombre}, tienes ${edad} años.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <Text style={styles.etiqueta}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.etiqueta}>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="ejemplo@correo.com"
        value={correo}
        onChangeText={setCorreo}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Campo Edad (Reto de laboratorio) */}
      <Text style={styles.etiqueta}>Edad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escriba su edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />

      <View style={styles.fila}>
        <Text style={styles.textoSwitch}>Acepto las condiciones</Text>
        <Switch value={acepta} onValueChange={setAcepta} />
      </View>

      <Pressable style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F5F7FA',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#0D4E65',
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B8C4CE',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  textoSwitch: {
    fontSize: 15,
  },
  boton: {
    backgroundColor: '#0D4E65',
    padding: 14,
    borderRadius: 9,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});