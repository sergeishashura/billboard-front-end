import {
  alpha,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { bgGradient } from "../../theme/css";
import { getAdvertisement } from "../../requests/user/ad/getAdvertisement";

export const Advertisement = () => {
  const [ad, setAd] = useState();

  const [deviceId, setDeviceId] = useState();

  const theme = useTheme();

  const handleFetchAd = async () => {
    console.log(deviceId);
    try {
      const response = await getAdvertisement(deviceId);
      setAd(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
            Реклама
          </Typography>
          {ad && <Box component="img" src={ad.media_path} />}
          <Box
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            gap={"13px"}
          >
            <Typography variant="h6">Введите ID вашего устройства</Typography>
            <TextField
              label="id устройства"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
            />
            <Button variant="contained" onClick={handleFetchAd}>
              Получить рекламу
            </Button>
          </Box>
        </Card>
      </Stack>
    </Box>
  );
};
