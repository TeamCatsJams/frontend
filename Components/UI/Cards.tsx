import { Avatar, Box, Container, Stack, Typography } from "@mui/material";

type Props = {};

function Cards({}: Props) {
  return (
    <>
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
        <Container>
          <Stack alignItems={"center"} p={"20px"} gap={4}>
            <Avatar
              alt="UtkarsH SRIVASTAVA"
              sx={{ height: "150px", width: "200px", borderRadius: "16px" }}
            />

            <Typography>Name</Typography>
            <Typography color={'primary'}>Designation</Typography>
            <Typography color={'primary'}>Location of work</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Cards;
