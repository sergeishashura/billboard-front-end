import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { devices } from "../../../data";
import { useNavigate } from "react-router-dom";
import { DIVICES_GROUP_URL } from "../../../navigation/routes";

export const DeviceList = () => {
  const naviagate = useNavigate();

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
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Устройства:</Typography>
                <Typography variant="body1">{device.device_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Владельца:</Typography>
                <Typography variant="body1">{device.owner_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Статус подключения:</Typography>
                <Typography variant="body1">
                  {device.connection_status ? "Подключено" : "Отключено"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  Загруженные рекламные ролики:
                </Typography>
                <Typography variant="body1">
                  {device.loaded_ads.length > 0
                    ? device.loaded_ads.join(", ")
                    : "Нет загруженных роликов"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
