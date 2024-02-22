import CustomButton from "../UI/Button";
import Navbar from "../UI/Navbar";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Tags from "../UI/Tags";
type Props = {};

function DoctorProfile({}: Props) {
  return (
    <>
      <Navbar />

      <Container maxWidth={"xl"} sx={{ pt: "100px" }}>
        <Stack direction={"row"} gap={"150px"}>
          <Stack gap={4}>
            <Avatar
              alt="UtkarsH SRIVASTAVA"
              sx={{ height: "250px", width: "200px", borderRadius: "16px" }}
            />
            <CustomButton
              variant="contained"
              content="Schedule Meeting"
              sx={{ borderRadius: "16px", boxShadow: "none" }}
            />
          </Stack>
          <Stack gap={"20px"}>
            <Typography color={"primary"} variant="h3" component={"h3"}>
              Zhang Xingiang
            </Typography>
            <Typography variant="h6" component={"h6"}>
              Practice Statement:
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="h6" component={"h6"}>
              Practice Area:
            </Typography>
            <Box maxWidth={"sm"}>
              <Stack direction={"row"} flexWrap={"wrap"} gap={"16px"}>
                {" "}
                <Tags
                  content="Practice Area"
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    maxWidth: "200px",
                    padding: "8px",
                  }}
                />
                <Tags
                  content="Practice Area"
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    maxWidth: "200px",
                    padding: "8px",
                  }}
                />
                <Tags
                  content="Practice Area"
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    maxWidth: "200px",
                    padding: "8px",
                  }}
                />
                <Tags
                  content="Practice Area"
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    maxWidth: "200px",
                    padding: "8px",
                  }}
                />
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Box
              minHeight={"350px"}
              maxHeight={"400px"}
              minWidth={"200px"}
              maxWidth={"300px"}
              borderRadius={"16px"}
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {" "}
              <Container sx={{ minWidth: "300px", maxWidth: "300px" }}>
                <Stack p={"20px"} gap={4}>
                  <Typography>Country</Typography>
                  <Typography>Field</Typography>
                  <Typography>Bio</Typography>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default DoctorProfile;
