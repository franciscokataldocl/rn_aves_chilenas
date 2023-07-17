import { FlatList, View } from 'native-base';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const ListCards = () => {
  const birds = useSelector(state => state.birds.filtered);

  return (
    <View
    style={{ 
        justifyContent: 'center', 
        flexDirection: 'row', 
        flex: 1}}>
      <FlatList
        style={{
          width: 400,
          shadowColor: '#1C1B20',
          shadowOffset: {
            width: 0,
            height: 8
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 13
        }}
        data={birds}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.name}
        alwaysBounceVertical={false}
        initialNumToRender={4}

      />
    </View>
  );
};



export default memo(ListCards);
