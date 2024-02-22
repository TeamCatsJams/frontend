import AppSidebar from '../UI/AppSidebar'
import Navbar from "../UI/Navbar";
import { Stack } from "@mui/material";

type Props = {};

function Dashboard({}: Props) {
  return (
    <>
      <Navbar />

      <Stack direction={'row'} gap={'80px'}>
        <AppSidebar/>

      </Stack>
    </>
  );
}

export default Dashboard;
