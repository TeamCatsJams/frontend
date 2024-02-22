import { Box, Stack} from "@mui/material";
import Navbar from "../UI/Navbar";
import HeroSection from "../UI/HeroSection";
import Pill1 from "./../../src/assets/PillBottlemed.svg"
import Pill2 from "./../../src/assets/PillBottlerx.svg"
import Doctor from "./../../src/assets/doctorwithsyringe.svg"
//import { useSpring, animated } from '@react-spring/web';


type Props = {};
2
function Home({}: Props) {
  /*const props1 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000, delay: 0 } });
  const props2 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000, delay: 500 } });
  const props3 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000, delay: 1000 } });
  const props4 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000, delay: 1500 } });
  const props5 = useSpring({ transform: 'translateY(0px)', from: { transform: 'translateY(10px)' }, to: { transform: 'translateY(20px)' }, config: { duration: 1000, tension: 120, friction: 14, reverse: true }, loop: true, delay: -2000 });
  */

  return (
    <>
      <Navbar />

      <Box mt={'100px'}>
        <Stack alignItems={'center'}>
          <HeroSection />
        </Stack>

        <Box
          
          position="absolute"
          top="40%"
          bottom="0"
          //left="0"
          right="10%"
            
        >
          <img src={Doctor} style={{height:"80%"}}></img>
        </Box>

        
        
        <Box 
        position="absolute"
        top="40%"
        left="10%"
        >
          <img src={Pill1} style={{width:"100%"}} />
        </Box>
        

        
        <Box 
        position="absolute"
        top="80%"
        left="20%"
        >
          <img src={Pill2} style={{width:"100%"}} />
        </Box>
       

        
        <Box 
        position="absolute"
        top="60%"
        left="40%"
        >
          <img src={Pill1} style={{width:"100%"}} />
        </Box>
    

   
        <Box 
        position="absolute"
        top="80%"
        left="60%"
        >
          <img src={Pill2} style={{width:"100%"}} />
        </Box>
     

        {/*<animated.div style={props5}>
        <Box 
        position="absolute"
        top="60%"
        left="80%"
        >
          <img src={Pill1} style={{width:"100%"}} />
        </Box>
  </animated.div>*/}

      </Box>
    </>
  );
}

export default Home;
