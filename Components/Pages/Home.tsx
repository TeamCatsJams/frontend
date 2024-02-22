import { Box, Stack} from "@mui/material";
import Navbar from "../UI/Navbar";
import HeroSection from "../UI/HeroSection";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Navbar />

      <Box mt={'100px'}>
        <Stack alignItems={'center'}>
          <HeroSection />
        </Stack>
      </Box>
    </>
  );
}

export default Home;
