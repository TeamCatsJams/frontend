import { Container, Box, Stack, Typography } from "@mui/material";
import Navbar from "../UI/Navbar";
import Calender from "../UI/Calender"
import CustomButton from "../UI/Button";

type Props = {};

export default function Appointment({}: Props) {
  return (
    <>
      <Navbar />
      <Box pt={'100px'}>
        <Container maxWidth={"md"}>
            <Stack direction={'row'} width={'100%'}>
              <Box flex={'0.5'}>
              <Calender/>
              <Stack gap={4} flex={'0.5'}>
                <Typography>
                  Meeting Duration
                </Typography>
                <CustomButton variant="outlined" content=""/>

              </Stack>
              </Box>

            </Stack>
         </Container>
      </Box>
    </>
  );
}
