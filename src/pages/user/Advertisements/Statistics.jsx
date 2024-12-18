import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { getStatistic } from "../../../requests/user/ad/getStatistic";

export const Statistics = () => {
  const { adId } = useParams();
  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
    const fetchStatistic = async (id) => {
      try {
        const response = await getStatistic(id);
        // Assuming response.data is an array
        if (response.data.length > 0) {
          setStatistic(response.data); // Set the first item in the array
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchStatistic(adId);
  }, [adId]);

  return (
    <Container maxWidth="xl" style={{ marginTop: "20px" }}>
      {statistic ? (
        statistic.map((el) => (
          <Card key={el.ad_id}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Статистика для рекламы: {el.ad_id}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">ID Статистики:</Typography>
                  <Typography variant="body1">{el.stat_id}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">ID Устройства:</Typography>
                  <Typography variant="body1">{el.device_id}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Количество показов:</Typography>
                  <Typography variant="body1">{el.display_count}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Последнее обновление:</Typography>
                  <Typography variant="body1">
                    {new Date(el.last_updated).toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" gutterBottom>
          Загрузка статистики...
        </Typography>
      )}
    </Container>
  );
};
