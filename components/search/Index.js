import { Box, Input } from 'native-base';
import { View, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { filterBirds, resetBirds } from '../../store/slices/BirdSlice';


const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 2 ) {
        dispatch(filterBirds(search));
        //Keyboard.dismiss()
    } else{
        dispatch(resetBirds());
        //settings
    }
    
  }, [search]);

  return (
    <Box alignItems='center' mt='15%' pb='3%'>
      <View
        style={{
          width: 400,
          shadowColor: '#1C1B20',
          shadowOffset: {
            width: 0,
            height: 8
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 13
        }}
      >
        <Input
          name='search'
          onChangeText={setSearch}
          value={search}
          placeholder='Buscar un ave'
          size="xl"
      mx="3"
      py="3"
      backgroundColor="white"
      variant='rounded'
      borderColor= 'transparent'
      style={{ fontSize: 23, color: "#44434A"}}
      _focus={{
        borderColor: "none",
      }}
        />
      </View>
    </Box>
  );
};

export default Search;
