import {
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

type Props = {};

function Sidebar({}: Props) {
  return (
    <>
      <FormGroup>
        <Stack gap={4} width={'200px'} p={'20px'}>
          {/* CONTROL 1 */}
          <Stack gap={1}>
            <Typography variant="h6" component={"h6"}>
              Country:
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Any Country"
            />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
          </Stack>

          {/* CONTROL 2 */}
          <Stack gap={1}>
            <Typography variant="h6" component={"h6"}>
              Licensed State:
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Any State"
            />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
          </Stack>
          {/* CONTROL GROUP 3 */}
          <Stack gap={1}>
            <Typography variant="h6" component={"h6"}>
              Licensed State:
            </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Practice Area"
            />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
            <FormControlLabel control={<Checkbox />} label="Country1" />
          </Stack>
        </Stack>
      </FormGroup>
    </>
  );
}

export default Sidebar;
