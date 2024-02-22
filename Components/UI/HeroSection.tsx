import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "./Button";

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
        >
          <TextField
            label="Search"
            variant="outlined"
            sx={{ borderRadius: "20px" }}
            fullWidth
          />
          <CustomButton
            content="Search"
            variant="contained"
            sx={{
              borderRadius: "16px",
              height: "43px",
              width: "137px",
              boxShadow: "none",
            }}
          >
            {" "}
          </CustomButton>
        </Stack>
      </Container>
    </>
  );
}

export default HeroSection;
