import {
  Box,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeFill from "../../assets/icons/eye-fill.svg";
import eyeOffFill from "../../assets/icons/eye-off-fill.svg";
import Iconify from "../../components/Iconofy/Iconofy";
import { LoadingButton } from "@mui/lab";
import { bgGradient } from "../../theme/css";
import { alpha, useTheme } from "@mui/material/styles";
import { AD_URL, USERS_URL } from "../../navigation/routes";
import { postLogin } from "../../requests/login/postLogin";
import { ROLE_ID, TOKEN } from "../../constans/localStorage";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginButtonClicked, setIsLoginButtonClicked] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await postLogin(username, password);
      console.log(response, "yolo");
      localStorage.setItem(TOKEN, response.data.token);
      localStorage.setItem(ROLE_ID, response.data.RoleID);
      if (response.data.RoleID === "1") {
        navigate(AD_URL);
      } else {
        navigate(USERS_URL);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClick={() => setIsLoginButtonClicked(false)}
        />

        <TextField
          name="password"
          label={"Пароль"}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setIsLoginButtonClicked(false)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify icon={showPassword ? eyeFill : eyeOffFill} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={isLoginButtonClicked}
        sx={{ mt: 5 }}
        onClick={() => handleLogin()}
      >
        Войти
      </LoadingButton>
    </>
  );

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
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Вход в приложение
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
};

export default LoginPage;
