import { useEffect, useState } from "react";
import { getDevicesGroups } from "../../../requests/user/devices/getDevicesGroups";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CHANGE_GROUP_URL } from "../../../navigation/routes";
import { postCreateGroup } from "../../../requests/user/devices/postCreateGroup";

export const DevicesGroupList = () => {
  const [devices, setDevices] = useState([]);

  const [open, setOpen] = useState(false);

  const [groupName, setGroupName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDevicesGroups = async () => {
      try {
        const response = await getDevicesGroups();
        setDevices(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDevicesGroups();
  }, []);

  const handleCreateGroup = async () => {
    console.log(groupName);
    try {
      const response = await postCreateGroup(groupName);
      console.log(response.data);
      navigate(CHANGE_GROUP_URL.replace(":id", response.data.group_id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Stack direction="row" spacing={6} style={{ marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Список устройств
        </Typography>
        <Button onClick={() => setOpen(true)}>Создать группу</Button>
      </Stack>
      {devices.map((device) => (
        <Card key={device.group_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">ID группы: </Typography>
                <Typography variant="body1" marginLeft={"13px"}>
                  {device.group_id}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Typography variant="h6">Название группы: </Typography>
                <Typography variant="body1" marginLeft={"13px"}>
                  {device.group_name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate(CHANGE_GROUP_URL.replace(":id", device.group_id))
                  }
                >
                  Изменить
                </Button>
                <Button variant="contained" style={{ marginLeft: "20px" }}>
                  Расписание
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            flexDirection: "column",
            gap: "20px",
            width: "420px",
          }}
        >
          <Typography variant="h3">Создание группы</Typography>
          <TextField
            label="Новая группа"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleCreateGroup}>
            Создать группу
          </Button>
        </Card>
      </Modal>
    </Container>
  );
};
