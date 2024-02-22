import { Container, Box, Stack, Typography } from "@mui/material";
import Navbar from "../UI/Navbar";
import Calender from "../UI/Calender";
import CustomButton from "../UI/Button";

type Props = {};

export default function Appointment({}: Props) {
  return (
    <>
      <Navbar />
      <Box pt={"100px"}>
        <Container maxWidth={"md"}>
          <Stack direction={"row"} width={"100%"} gap={"20px"}>
            <Box flex={"0.5"} minHeight={"600px"} bgcolor={"primary"}>
           <Typography variant="h6" textAlign={'center'} mb={'40px'} color={"primary"}>
            Meet with Zhang Xingiang
           </Typography>
              <Calender />
            </Box>
            <Stack gap={4} flex={"0.5"}>
              <Typography variant="h5" component={"h4"}>
                Meeting Duration
              </Typography>
              <Stack gap={"8px"}>
                <CustomButton
                  variant="outlined"
                  content="30 minutes"
                  sx={{ borderRadius: "16px" }}
                />
                <CustomButton
                  variant="outlined"
                  content="45 minutes"
                  sx={{ borderRadius: "16px" }}
                />
                <CustomButton
                  variant="outlined"
                  content="60 minutes"
                  sx={{ borderRadius: "16px" }}
                />
              </Stack>
              <Box maxWidth={"250px"} mx={"auto"}>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  Zhang Xingiang is available for meetings this month. Book one
                  according to your convinience
                </Typography>
              </Box>

              <Box maxWidth={"250px"} mx={"auto"}>
                <Typography textAlign={"center"} fontSize={"20px"}>
                  You can also contact the doctor by mailing at the following
                  address : 1234@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
