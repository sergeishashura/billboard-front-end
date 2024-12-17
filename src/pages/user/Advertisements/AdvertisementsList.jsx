import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { adStatistics } from "../../../data";
import { generatePath, useNavigate } from "react-router-dom";
import { AD_STATISTIC_URL } from "../../../navigation/routes";

export const AdvertisementsList = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        {adStatistics.map((ad) => (
          <Card>
            <Stack direction="row" justifyContent="space-between" margin={5}>
              <Typography>Реклама {ad.ad_id}</Typography>
              <Button
                onClick={() =>
                  navigate(generatePath(AD_STATISTIC_URL, { adId: ad.ad_id }))
                }
              >
                Просмотр статистики
              </Button>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};
