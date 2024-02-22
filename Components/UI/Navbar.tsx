import { Container, Box, Stack, Typography } from "@mui/material";
import CustomButton from "../UI/Button";
import { useAuth } from "../Providers/AuthProvider";

type Props = {};

function Navbar({}: Props) {
  const {login,user} = useAuth()
  console.log(user)
  return (
    <Container maxWidth={"xl"}>
      <Box minHeight={"72px"} p={'16px'} borderRadius={'16px'} sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
 >
        <Stack direction={"row"}>
          <Typography variant="h4" component={"h6"}>
            Tel
            <Typography color={"primary"} variant="h4" component={"span"}>
              med
            </Typography>
          </Typography>

          <Box ml={"auto"}>
            <Stack gap={4} direction={"row"}>
              <CustomButton
                content="Create Account"
                variant="outlined"
                sx={{ borderRadius: "16px" }}
              />
              <CustomButton
                content="Login"
                variant="contained"
                sx={{
                  borderRadius: "16px",
                  height: "43px",
                  width: "137px",
                  boxShadow: "none",
                
                }}
                onClick={login}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Navbar;
