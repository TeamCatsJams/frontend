import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = { name: string; location: string; designation: string };

function Cards(props: Props) {
  const navigate = useNavigate();
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
        onClick={() => {
          navigate("/profile/123");
        }}
      >
        {" "}
        <Container>
          <Stack alignItems={"center"} p={"20px"} gap={4}>
            <Avatar
              alt={props.name}
              sx={{ height: "150px", width: "200px", borderRadius: "16px" }}
            />

            <Typography color={"black"}>{props.name}</Typography>
            <Typography color={"primary"}>{props.designation}</Typography>
            <Typography color={"primary"}>{props.location}</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Cards;
