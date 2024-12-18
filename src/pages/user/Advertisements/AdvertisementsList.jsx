import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import { generatePath, useNavigate } from "react-router-dom";
import { AD_STATISTIC_URL } from "../../../navigation/routes";
import { useEffect, useState } from "react";
import { getAllAds } from "../../../requests/user/ad/getAllAds";

export const AdvertisementsList = () => {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAllAds = async () => {
      try {
        const response = await getAllAds();
        setAds(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllAds();
  }, []);

  return (
    <Container maxWidth="xl">
      <Stack spacing={3}>
        {ads.map((ad) => (
          <Card key={ad?.ID}>
            <Stack direction="row" justifyContent="space-between" margin={5}>
              <Typography>Реклама {ad?.ID}</Typography>
              <Box
                component="img"
                src={ad.link}
                width={"100px"}
                height={"150px"}
              />
              <Button
                onClick={() =>
                  navigate(generatePath(AD_STATISTIC_URL, { adId: ad?.ID }))
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
