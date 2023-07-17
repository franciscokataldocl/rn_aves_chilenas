import { View, Center, Text, Image} from 'native-base'
import React,{useEffect} from 'react'
import SearchBox from '../../components/search/Index';
import { useDispatch, useSelector } from 'react-redux';
import ListCards from '../../components/card/ListCards';
import NoResult from '../../components/notFound/NoResult';


const Home = () => {
    const birds = useSelector(state => state.birds);

    useEffect(() => {
     console.log('birds_', birds.filtered)
     
    }, [birds])
    

  return (

<View bg="base.cream" flex={1} >
        <SearchBox />
        {birds.filtered.length > 0 ? <ListCards/> : <NoResult/>}
    </View>
    
    // <Center flex={1} bg="base.cream">
    //   <Center  bg="transparent" width='100%' >
    //    home page
    //   </Center>
    // </Center>
  )
}

export default Home