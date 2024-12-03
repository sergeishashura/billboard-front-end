import React from "react";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { schedules } from "../../../data"; // Убедитесь, что путь к данным правильный

export const Timetable = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Расписание рекламных роликов
      </Typography>
      {schedules.map((schedule) => (
        <Card key={schedule.schedule_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Расписания:</Typography>
                <Typography variant="body1">{schedule.schedule_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Рекламы:</Typography>
                <Typography variant="body1">{schedule.ad_id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Частота показа в час:</Typography>
                <Typography variant="body1">
                  {schedule.display_frequency_per_hour}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">ID Устройства:</Typography>
                <Typography variant="body1">{schedule.device_id}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
