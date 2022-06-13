import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle((oldToggle) => (!oldToggle));

  useEffect(() => {
    Torch.switchState(toggle)
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? styles.containerWhite : styles.containerBlack}>

      <TouchableOpacity onPress={handleChangeToggle}>

        {/* Lamp Image */}

        <Image style={toggle ? styles.lightingOn : styles.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />

        {/* Logo image */}

        <Image style={toggle ? styles.logoDio : styles.logoDioWhite}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />

      </TouchableOpacity>


    </View>
  );
}

export default App;

const styles = StyleSheet.create({

  containerBlack: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerWhite: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    height: 150,
    width: 150,
  },

  logoDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250,
  },

  logoDioWhite: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250,
  },

});
