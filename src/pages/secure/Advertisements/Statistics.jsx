import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { adStatistics } from "../../../data";

export const Statistics = () => {
  const { adId } = useParams(); // Получаем adId из параметров маршрута
  const adData = adStatistics.find((ad) => ad.ad_id === adId); // Находим данные по adId

  if (!adData) {
    return <Typography variant="h6">Статистика не найдена</Typography>; // Если данных нет
  }

  return (
    <Container maxWidth="xl" style={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Статистика для рекламы: {adData.ad_id}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">ID Статистики:</Typography>
              <Typography variant="body1">{adData.stat_id}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">ID Устройства:</Typography>
              <Typography variant="body1">{adData.device_id}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Время показа:</Typography>
              <Typography variant="body1">
                {new Date(adData.display_time).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Продолжительность показа:</Typography>
              <Typography variant="body1">
                {adData.duration_seconds} секунд
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
