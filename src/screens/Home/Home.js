import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, Header, SettingOptions} from '../../compoenets';
import styles from './styles';
import {SIGNAL_ROTATION_DATA} from './mock';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [timeDurationVisible, setTimeDurationVisible] = useState(false);
  const [signalRotation, setSignalRotationVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [signalColor, setSignalColor] = useState('red');
  const [timeDurationTxt, setTimeDurationTxt] = useState('');
  const [ambDuration, setAmbDuration] = useState(10);
  const [duration, setDuration] = useState(5);
  const [rotaton, setRoation] = useState('ClockWise');
  const [ambActive, setAmbActive] = useState(false);

  const renderTimeDuration = () => (
    <>
      <TextInput
        style={{
          width: '70%',
          backgroundColor: 'red',
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 8,
          padding: 10,
        }}
        placeholder="Enter Time Duration"
        onChangeText={text => setTimeDurationTxt(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#DFDDFD',
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 8,
          padding: 10,
        }}
        onPress={() => {
          setDuration(Number(timeDurationTxt));
          setVisible(false);
          setTimeDurationVisible(false), setSignalRotationVisible(false);
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </>
  );

  const renderSignalRotation = () => (
    <>
      <FlatList
        data={SIGNAL_ROTATION_DATA}
        renderItem={({item}) => {
          return (
            <SettingOptions
              onPress={() => {
                setSignalRotationVisible(false);
                setVisible(false);
                handleRotation(item.title);
              }}
              title={item.title}
            />
          );
        }}
      />
    </>
  );

  const startTimer = time => {
    setTimer(
      setInterval(() => {
        switch (signalColor) {
          case 'red':
            setSignalColor('green');
            break;
          case 'green':
            setSignalColor('red');
            break;
        }
      }, time * 1000),
    );
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  useEffect(() => {
    startTimer(duration);
    return () => {
      stopTimer();
    };
  }, [signalColor]);

  const handleAmbPress = () => {
    setAmbActive(true);
    stopTimer();
    setSignalColor('green');
    setTimeout(() => {
      setAmbActive(false);
      startTimer(duration);
    }, ambDuration * 1000);
  };

  const handleRotation = rotate => {
    if (rotate === 'ClockWise') {
    } else if (rotate === 'Anti-ClockWise') {
    }
    setRoation(rotate);
  };

  return (
    <View style={styles.container}>
      <Header onSettingPress={() => setVisible(true)} />
      <View style={styles.childContainer}>
        <View style={styles.upSignal}>
          <Box
            style={[signalColor]}
            boxTitle={'AMB'}
            onPress={handleAmbPress}
          />
          <Box boxTitle={'A'} bgColor={signalColor} />
        </View>
        <View style={styles.leftRightSignalCon}>
          <View style={{flexDirection: 'row'}}>
            <Box boxTitle={'AMB'} onPress={handleAmbPress} />
            <Box boxTitle={'D'} bgColor={signalColor} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Box boxTitle={'B'} bgColor={signalColor} />
            <Box boxTitle={'AMB'} onPress={handleAmbPress} />
          </View>
        </View>
        <View style={styles.upSignal}>
          <Box boxTitle={'C'} bgColor={signalColor} />
          <Box boxTitle={'AMB'} onPress={handleAmbPress} />
        </View>
      </View>
      <Modal animationType="slide" visible={visible}>
        <View style={{flex: 1}}>
          <Text onPress={() => setVisible(false)}>Modal</Text>
          <SettingOptions
            title={'Time Duration'}
            onPress={() => setTimeDurationVisible(true)}
          />
          <SettingOptions
            title={'Signal Rotation'}
            onPress={() => setSignalRotationVisible(true)}
          />
        </View>
      </Modal>
      <Modal animationType="fade" visible={timeDurationVisible}>
        {renderTimeDuration()}
      </Modal>
      <Modal animationType="fade" visible={signalRotation}>
        {renderSignalRotation()}
      </Modal>
    </View>
  );
}
