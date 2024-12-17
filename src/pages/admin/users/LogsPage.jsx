import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserLogs } from "../../../requests/admin/users/getUserLogs";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
  Button,
  Box,
} from "@mui/material";

export const LogsPage = () => {
  const { userId } = useParams();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async (userId) => {
      try {
        const response = await getUserLogs(Number(userId));
        console.log(response);
        setLogs(response.data);
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить логи.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs(userId);
  }, [userId]);

  const handleDownloadFile = () => {
    const logText = logs
      .map(
        (log) =>
          `Timestamp: ${log.action_timestamp}\n` +
          `Type: ${log.action_type}\n` +
          `Details: ${log.details}\n` +
          `Device ID: ${log.device_id}\n` +
          `Log ID: ${log.log_id}\n` +
          `User ID: ${log.user_id}\n` +
          `\n`
      )
      .join("");

    const blob = new Blob([logText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `user_logs_${userId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        marginBottom="20px"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Логи пользователя {userId}
        </Typography>
        <Button
          variant="contained"
          onClick={handleDownloadFile}
          disabled={logs.length === 0}
        >
          Скачать файл с логами
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : logs.length > 0 ? (
        logs.map((log) => (
          <Card key={log.log_id} style={{ marginBottom: "20px" }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">Timestamp:</Typography>
                  <Typography variant="body1">
                    {log.action_timestamp}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Type:</Typography>
                  <Typography variant="body1">{log.action_type}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Details:</Typography>
                  <Typography variant="body1">{log.details}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Device ID:</Typography>
                  <Typography variant="body1">{log.device_id}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Log ID:</Typography>
                  <Typography variant="body1">{log.log_id}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">User ID:</Typography>
                  <Typography variant="body1">{log.user_id}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">Логи не найдены.</Typography>
      )}
    </Container>
  );
};
