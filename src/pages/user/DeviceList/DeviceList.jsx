import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DIVICES_GROUP_URL } from "../../../navigation/routes";
import { getUserDevices } from "../../../requests/user/devices/getUserDevices";

export const DeviceList = () => {
  const naviagate = useNavigate();
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await getUserDevices();
        setDevices(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDevices();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Stack direction="row" spacing={6} style={{ marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Список устройств
        </Typography>
        <Button onClick={() => naviagate(DIVICES_GROUP_URL)}>
          Группы устройств
        </Button>
      </Stack>
      {devices.map((device) => (
        <Card key={device.device_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">ID Устройства:</Typography>
                <Typography variant="h6" marginLeft={"13px"}>
                  {device.device_id}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">ID Владельца:</Typography>
                <Typography variant="h6" marginLeft={"13px"}>
                  {device.user_id}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">Статус подключения:</Typography>
                <Typography variant="body1" marginLeft={"13px"}>
                  {device.connection_status ? "Подключено" : "Отключено"}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">ID группы:</Typography>
                <Typography variant="h6" marginLeft={"13px"}>
                  {device.group_id}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
