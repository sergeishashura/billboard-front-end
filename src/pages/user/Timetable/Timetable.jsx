import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CHANGE_TIMETABLE_URL } from "../../../navigation/routes";
import { getTimetables } from "../../../requests/user/timetable/getTimetables";

export const Timetable = () => {
  const navigate = useNavigate();
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const response = await getTimetables();
        console.log(response);
        setTimetables(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimetables();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Расписание реклам
      </Typography>
      {timetables.map((schedule) => (
        <Card key={schedule.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3} padding={2}>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"13px"}
              >
                <Typography variant="h6">ID группы:</Typography>
                <Typography variant="body1">{schedule.group_id}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"13px"}
              >
                <Typography variant="h6">Частота показа:</Typography>
                <Typography variant="body1">
                  {schedule.freq / 60} мин
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"13px"}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate(CHANGE_TIMETABLE_URL.replace(":id", schedule.id))
                  }
                >
                  Редактировать
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
