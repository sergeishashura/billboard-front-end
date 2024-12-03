import {
  Alert,
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
import { AD_URL } from "../../navigation/routes";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginButtonClicked, setIsLoginButtonClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);
  const [unauthorizedAlert, setUnauthorizedAlert] = useState(false);

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label={"Почта"}
          error={!!errors.email || !!loginError}
          helperText={
            errors.email || loginError ? errors.email || loginError : ""
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => setIsLoginButtonClicked(false)}
        />

        <TextField
          name="password"
          label={"Пароль"}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => setIsLoginButtonClicked(false)}
          error={!!errors.password || !!loginError}
          helperText={
            errors.password || loginError ? errors.password || loginError : ""
          }
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

      {unauthorizedAlert && <Alert severity="warning">{loginError}</Alert>}

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        loading={isLoginButtonClicked}
        sx={{ mt: 5 }}
        onClick={() => navigate(AD_URL)}
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
