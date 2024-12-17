import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTimetable } from "../../../requests/user/timetable/getTimetable";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import { getAllAds } from "../../../requests/user/ad/getAllAds";

export const ChangeTimetable = () => {
  const { id } = useParams();

  const [timetable, setTimetable] = useState();

  const [time, setTime] = useState();

  const [ads, setAds] = useState();

  useEffect(() => {
    const fetchTimetable = async (id) => {
      try {
        const response = await getTimetable(id);
        setTimetable(response.data);
        setTime(response.data.freq);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllAds = async () => {
      try {
        const response = await getAllAds();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimetable(id);
    fetchAllAds();
  }, [id]);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Редактирование расписания ID {id}
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Typography variant="h6" gutterBottom>
          Время показа рекламы
        </Typography>

        <Select value={time || 0} onChange={(e) => setTime(e.target.value)}>
          <MenuItem value={0}>0 мин</MenuItem>
          <MenuItem value={180}>3 мин</MenuItem>
          <MenuItem value={300}>5 мин</MenuItem>
          <MenuItem value={600}>10 мин</MenuItem>
          <MenuItem value={900}>15 мин</MenuItem>
        </Select>
      </Box>
    </Container>
  );
};
