import { Center, Image } from "native-base"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBirds } from '../../store/actions/birds/BirdsActions';


const OnBoarding = ({navigation}) => {
    const birds = useSelector(state => state.birds);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBirds());
      }, []);

      useEffect(() => {
        if(birds.birds.length > 10){
            navigation.navigate('Home');
        }
      }, [birds])
      

  return (
    <Center flex={1} bg="base.cream">
      <Center  bg="transparent" width='100%' >
        <Image 
        source={require('../../assets/onboarding-image.gif')}  
        alt="Alternate Text" 
        size='200'
        width='100%'/>
      </Center>
    </Center>
  )
}

export default OnBoarding;