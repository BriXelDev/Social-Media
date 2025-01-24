import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Opciones de perfil</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileassets}>
          <Image
          source={require('./assets/Harmony-Trailblazer-with-hat-Relics-Honkai-Star-Rail.jpg')}
          style={styles.image}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cambiar imagen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title_profile}>Nombre</Text>
          <TextInput style={styles.input}>Caelus</TextInput>
          <Text style={styles.title}>Descripción</Text>
          <TextInput style={styles.input} multiline={true}>¡Las reglas están hechas para romperse!</TextInput>
        </View>
      </View>
      <View style={styles.container_cambios}>
        <TouchableOpacity style={styles.button_cambios}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Barra de navegación
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    backgroundColor: '#474787',
    height: 90,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
  },

  //Imagen del perfil y botón
  profileasssets: {
    alignItems: 'center'
  },
  image: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#474787',
    borderRadius: 5,
    color: '#ffffff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title_profile: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
  },
  profileContainer: { //Ya que todo se muestra en cascada, tuve que usar positioning para que no fuera así 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50, 
    marginLeft: 20,
  },

  //Información del perfil
  inputContainer: {
    flex: '1',
    marginLeft: 30,
    marginTop: -70
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    fontSize: 15,
    width: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#333',
    marginTop: 10
  },
  
  //Guardar los cambios
  button_cambios: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#64dd51',
    borderRadius: 5,
    color: '#ffffff',
    justifyContent: 'center'
  },
  container_cambios: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    marginTop: 20
  },
});
