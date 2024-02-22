import { Button, CircularProgress, ButtonProps } from "@mui/material";
type Props = {
  isLoading?: boolean;
  type?: 'submit';
  variant: "text" | "contained" | "outlined";
  content: string;
};

const CustomButton = (props: Props & ButtonProps) => {
  return (
    <Button {...props} >
      {props.isLoading ? <CircularProgress color="secondary" /> : props.content}
    </Button>
  );
};

export default CustomButton;
