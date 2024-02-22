import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import SearchNav from "../UI/SearchNav";
import Sidebar from "../UI/Sidebar";
import { useParams } from "react-router-dom";
import Cards from "../UI/Cards";
import useSearchTerm from "../API/useSearchTerm";
import { useAuth } from "../Providers/AuthProvider";

type Props = {};

function SearchResult({}: Props) {
  const { searchTerm } = useParams();
  const { user } = useAuth();
  console.log(searchTerm);
  const { data, isLoading, isError, isSuccess } = useSearchTerm(
    user?.token as string,
    "uwu"
  );

  if (isSuccess) {
    console.log(data);
  }

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
            <Box>
              <Box
                p={"20px"}
                sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
              >
                {isLoading ? (
                  <CircularProgress color="primary" />
                ) : isSuccess ? (
                  <>
                    {data.data.map((item: any) => (
                      <Cards
                        key={item.id}
                        name={item.full_name}
                        location={item.location}
                        designation={item.designation}
                      />
                    ))}
                  </>
                ) : (
                  <>error</>
                )}
              </Box>
            </Box>
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
