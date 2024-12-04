import { alpha, Box, Button, Card, Stack, Typography } from "@mui/material";
import { bgGradient } from "../../theme/css";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL, PUBLUC_AD, SIGN_UP_URL } from "../../navigation/routes";

export const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 520,
          }}
        >
          <Typography variant="h4" sx={{ mb: 7 }}>
            Добро пожаловать на наш проект
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" onClick={() => navigate(LOGIN_URL)}>
              Вход
            </Button>
            <Button variant="contained" onClick={() => navigate(SIGN_UP_URL)}>
              Регистрация
            </Button>
            <Button variant="contained" onClick={() => navigate(PUBLUC_AD)}>
              Реклама
            </Button>
          </Box>
        </Card>
      </Stack>
    </Box>
  );
};
