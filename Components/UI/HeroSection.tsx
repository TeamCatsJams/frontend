import { Box, Container, Stack, Typography } from "@mui/material";
import SearchBar from '../UI/SearchBar'

type Props = {};

function HeroSection({}: Props) {
  return (
    <>
      <Typography component={"h3"} variant="h2">
        Your{" "}
        <Typography variant="h2" component={"span"} color={"primary"}>
          Health
        </Typography>
        , Your{" "}
        <Typography variant="h2" component={"span"} color={"primary"}>
          Time
        </Typography>{" "}
        , Your{" "}
        <Typography variant="h2" component={"span"} color={"primary"}>
          Way
        </Typography>
      </Typography>
      <Box mt={"20px"}>
        <Typography component={"p"} sx={{ fontSize: "20px" }}>
          Experience convenient and personalized telemedicine services from the
          comfort of your home
        </Typography>
      </Box>
      <Container maxWidth={"sm"}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          pt={'16px'}
        >
        <SearchBar variant="contained"/>
        </Stack>
      </Container>
    </>
  );
}

export default HeroSection;
