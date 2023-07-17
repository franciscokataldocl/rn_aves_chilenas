import { View,Center, Text,Alert, CloseIcon, VStack, HStack, IconButton } from 'native-base'
import React from 'react'

const NoResult = () => {
  return (
    <View
    style={{ 
        justifyContent: 'center', 
        flexDirection: 'row'}}>
        <Alert w="90%" status='base.purple' backgroundColor='base.purple' mt={5} py={5}>
        <Center>
                 <Text fontSize="md" color="white" mt="1">
                    No encontramos resultados :(
                  </Text>
                 </Center>
          </Alert>
    </View>
  )
}

export default NoResult