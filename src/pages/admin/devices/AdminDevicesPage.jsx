import { useEffect, useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { getDevices } from "../../../requests/admin/devices/getDevices";
import { postAddDevice } from "../../../requests/admin/devices/postAddDevice";
import { deleteDevice } from "../../../requests/admin/devices/deleteDevice";

export const AdminDevicesPage = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await getDevices();
        console.log(response);
        setDevices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDevices();
  }, []);

  const handleAddDevice = async () => {
    try {
      const response = await postAddDevice();
      console.log(response);
      setDevices((prevDevices) => [...prevDevices, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (device_id) => {
    try {
      const response = await deleteDevice(device_id);
      console.log(response);
      setDevices((prevDevices) =>
        prevDevices.filter((device) => device.device_id !== device_id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <Typography variant="h4" gutterBottom>
          Список устройств
        </Typography>
        <Button variant="contained" onClick={() => handleAddDevice()}>
          Добавить устройство
        </Button>
      </Stack>
      {devices.map((device) => (
        <Card key={device.device_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Устройства:</Typography>
                <Typography variant="body1">{device.device_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Пользователя:</Typography>
                <Typography variant="body1">{device.user_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Статус подключения:</Typography>
                <Typography variant="body1">
                  {device.connection_status ? "Подключено" : "Отключено"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Группа:</Typography>
                <Typography variant="body1">{device.group_id}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Загруженные рекламные ролики:
                </Typography>
                <Typography variant="body1">
                  {device.loaded_ads.length > 0
                    ? device.loaded_ads
                    : "Нет загруженных роликов"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(device.device_id)}
                >
                  Удалить устройство
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
