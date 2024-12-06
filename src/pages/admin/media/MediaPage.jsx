import { useEffect, useState } from "react";
import { getAllMedia } from "../../../requests/media/getAllMedia";
import { deleteMedia } from "../../../requests/media/deleteMedia";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Alert,
} from "@mui/material";

export const MediaPage = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const response = await getAllMedia();
        console.log(response);
        setMedia(response.data);
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить медиа.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedias();
  }, []);

  const handleDeleteMedia = async (media_id) => {
    try {
      await deleteMedia(media_id);
      setMedia((prevMedia) =>
        prevMedia.filter((media) => media.ID !== media_id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadFile = () => {
    // Логика для загрузки файла
    console.log("Загрузка файла...");
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px"
      >
        <Typography variant="h4">Медиа файлы</Typography>
        <Button variant="contained" onClick={handleUploadFile}>
          Загрузить файл
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : media.length > 0 ? (
        media.map((item) => (
          <Card
            key={item.ID}
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box display="flex" alignItems="center" flexDirection="row">
                <img
                  src={item.link}
                  alt={item.name}
                  style={{
                    width: "150px",
                    height: "200px",
                    marginRight: "16px",
                  }}
                />
                <Typography variant="h6">{item.name}</Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteMedia(item.ID)}
              >
                Удалить рекламу
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">Нет доступных медиа.</Typography>
      )}
    </Container>
  );
};
