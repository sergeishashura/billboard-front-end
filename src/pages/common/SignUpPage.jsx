import {
  alpha,
  Box,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "../../components/Iconofy/Iconofy";
import eyeFill from "../../assets/icons/eye-fill.svg";
import eyeOffFill from "../../assets/icons/eye-off-fill.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { postSignUp } from "../../requests/signup/postSignUp";
import { LoadingButton } from "@mui/lab";
import { bgGradient } from "../../theme/css";
import { LOGIN_URL } from "../../navigation/routes";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginButtonClicked, setIsLoginButtonClicked] = useState(false);

  const handleLogin = async () => {
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    setIsLoginButtonClicked(true);

    try {
      const response = await postSignUp(username, password);

      if (response.status === 201) {
        navigate(LOGIN_URL);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("Ошибка: неверные данные");
        } else if (error.response.status === 409) {
          alert("Такой пользователь уже зарегистрирован");
        }
      } else {
        console.error("Ошибка:", error);
      }
    } finally {
      setIsLoginButtonClicked(false);
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

        <TextField
          name="confirm-password"
          label={"Повторите пароль"}
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        type="button"
        variant="contained"
        color="inherit"
        loading={isLoginButtonClicked}
        sx={{ mt: 5 }}
        onClick={handleLogin}
      >
        Зарегистрироваться
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
            Регистрация в приложении
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
};
