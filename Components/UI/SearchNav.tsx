import CustomButton from "./Button";
import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

type Props = {};

const SearchNav = (_props: Props) => {
  return (
    <Container maxWidth={"xl"}>
      <Box
        minHeight={"72px"}
        p={"16px"}
        borderRadius={"16px"}
        sx={{
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
          <Container maxWidth={'md'}>
            <Stack direction={'row'} gap={2} justifyContent={'center'} alignItems={'center'}>
            <SearchBar variant={'outlined'} />

            </Stack>

          </Container>
          <Box ml={"auto"}>
            <Stack gap={4} direction={"row"}>
              <CustomButton
                content="Login"
                variant="contained"
                sx={{
                  borderRadius: "16px",
                  height: "43px",
                  width: "137px",
                  boxShadow: "none",
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default SearchNav;
