import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTimetable } from "../../../requests/user/timetable/getTimetable";
import {
  Box,
  Container,
  MenuItem,
  Select,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { getAllAds } from "../../../requests/user/ad/getAllAds";
import { postUpdateTimetable } from "../../../requests/user/timetable/postUpdateTimetable";

export const ChangeTimetable = () => {
  const { id } = useParams();
  const [timetable, setTimetable] = useState();
  const [time, setTime] = useState();
  const [ads, setAds] = useState([]);
  const [selectedAds, setSelectedAds] = useState([]);

  useEffect(() => {
    const fetchTimetable = async (id) => {
      try {
        const response = await getTimetable(id);
        console.log(response.data);
        setTimetable(response.data);
        setTime(response.data.freq);
        setSelectedAds(response.data.ad_ids || []);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllAds = async () => {
      try {
        const response = await getAllAds();
        setAds(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimetable(id);
    fetchAllAds();
  }, [id]);

  const handleCheckboxChange = (adId) => {
    setSelectedAds((prev) => {
      if (prev.includes(adId)) {
        return prev.filter((id) => id !== adId);
      } else {
        return [...prev, adId];
      }
    });
  };

  const handleSave = async () => {
    try {
      const response = await postUpdateTimetable({
        id: +timetable.id,
        group_id: +timetable.group_id,
        ad_ids: selectedAds,
        freq: +time,
        user_id: +timetable.user_id,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Выберите рекламу
        </Typography>
        {ads.map((ad) => (
          <FormControlLabel
            key={ad?.ID}
            control={
              <Checkbox
                checked={selectedAds.includes(Number(ad?.ID))}
                onChange={() => handleCheckboxChange(Number(ad?.ID))}
              />
            }
            label={
              <img
                src={ad?.link}
                alt={ad?.name}
                style={{ width: "100px", marginRight: "10px" }}
              />
            }
          />
        ))}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        style={{ marginTop: "20px" }}
      >
        Сохранить
      </Button>
    </Container>
  );
};
