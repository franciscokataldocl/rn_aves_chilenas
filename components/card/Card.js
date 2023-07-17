import { Center, View, PresenceTransition, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, TouchableOpacity } from 'react-native';

const Card = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const image = { uri: item.image };

  useEffect(() => {
    if (item.name.length > 0) {
      setVisible(true);
    }
  }, [item]);

  return (
    <View w='50%' h={200} p={3}>
      <PresenceTransition
        visible={visible}
        initial={{
          opacity: 0,
          translateY: 30,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          scale: 1,
          transition: {
            duration: 300,
            delay: 50
          }
        }}
      >
        <TouchableOpacity onPress={() => handleNavigation(item.link)}>
          <Center position='relative' overflow='hidden' borderRadius={30}>
            <ImageBackground
              style={{ width: '100%', height: '100%' }}
              source={image}
              resizeMode='cover'
            >
              <LinearGradient
                style={{ width: '100%', height: '100%' }}
                colors={['transparent', 'black']}
                position='absolute'
              >
                <Center
                  position='absolute'
                  bottom='0'
                  width='auto'
                  opacity='.7'
                  left='0'
                  right='0'
                  justifyContent='center'
                  alignItems='center'
                  py='3'
                  px='5'
                >
                  <Text style={{fontWeight: '400', fontSize: 20,textAlign: 'center',lineHeight: 22}}>{item.name}</Text>
                </Center>
              </LinearGradient>
            </ImageBackground>
          </Center>
        </TouchableOpacity>
      </PresenceTransition>
    </View>
  );
};

export default Card;
