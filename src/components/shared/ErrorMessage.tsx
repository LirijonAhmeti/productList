import { Alert } from "@mui/material";

interface Props {
  message: string;
}

export const ErrorMessage = (props: Props) => {
  return <Alert severity="error">{props.message}</Alert>;
};
