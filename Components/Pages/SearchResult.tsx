import { Stack, Typography, Box } from "@mui/material";
import SearchNav from "../UI/SearchNav";
import Sidebar from "../UI/Sidebar";
import { useParams } from "react-router-dom";
type Props = {};

function SearchResult({}: Props) {
  const { searchTerm } = useParams();
  console.log(searchTerm);

  return (
    <>
      <Box mb={"80px"}>
        <SearchNav />
        <Stack
          pt={"40px"}
          justifyContent={"space-between"}
          direction={"row-reverse"}
        >
          <Box sx={{ marginX: "100px", flex: "1" }}>
            <Typography component={"h4"} variant="h4" color={"primary"}>
              Telmed{" "}
              <Typography color={"black"} variant="h4" component={"span"}>
                Doctors for: {searchTerm}
              </Typography>{" "}
            </Typography>
          </Box>
          <Box
            ml={"150px"}
            borderRadius={"16px"}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Sidebar />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default SearchResult;
