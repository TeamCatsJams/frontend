import { Container, Box } from "@mui/material";
import Navbar from "../UI/Navbar";
import Calender from "../UI/Calender"

type Props = {};

export default function Appointment({}: Props) {
  return (
    <>
      <Navbar />
      <Box pt={'100px'}>
        <Container maxWidth={"md"}><Calender/></Container>
      </Box>
    </>
  );
}
