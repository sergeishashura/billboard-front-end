import { Alert, AlertTitle, Box, Card, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <Box
      sx={{
        height: 1,
      }}
    >
      <Helmet>
        <title>Ошибка</title>
      </Helmet>

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 500,
          }}
        >
          <Alert severity="error">
            <AlertTitle>
              {error.status} {error.statusText || error.name}
            </AlertTitle>
            {error.stack || error.message}
          </Alert>
        </Card>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
