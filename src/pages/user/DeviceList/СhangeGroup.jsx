import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFreeDevices } from "../../../requests/user/devices/getFreeDevices";
import { getGroupDevice } from "../../../requests/user/devices/getGroupDevice";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { postAddDeviceToGroup } from "../../../requests/user/devices/postAddDeviceToGroup";
import { postDeleteFromGroup } from "../../../requests/user/devices/postDeleteFromGroup";

export const ChangeGroup = () => {
  const { id } = useParams();

  const [devices, setDevices] = useState([]);

  const [freeDevices, setFreeDevices] = useState([]);

  useEffect(() => {
    const fetchGroupDevice = async (id) => {
      try {
        const response = await getGroupDevice(id);
        setDevices(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFreeDevice = async () => {
      try {
        const response = await getFreeDevices();
        setFreeDevices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    console.log(id);

    fetchGroupDevice(id);
    fetchFreeDevice();
  }, [id]);

  const handleAddToGroup = async (device_id, group_id) => {
    try {
      const response = await postAddDeviceToGroup(device_id, group_id);
      console.log(response);

      const addedDevice = response.data;

      setDevices((prevDevices) => [...prevDevices, addedDevice]);
      setFreeDevices((prevFreeDevices) =>
        prevFreeDevices.filter((device) => device.device_id !== device_id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFromGroup = async (device_id, group_id) => {
    try {
      const response = await postDeleteFromGroup(device_id, group_id);
      console.log(response);
      setDevices((prevDevices) =>
        prevDevices.filter((device) => device.device_id !== device_id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Stack direction="row" spacing={6} style={{ marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Список устройств группы
        </Typography>
      </Stack>
      {devices.map((device) => (
        <Card key={device.device_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Typography variant="h6">ID устройства: </Typography>
                <Typography variant="body1" marginLeft={"13px"}>
                  {device.device_id}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteFromGroup(device.device_id, id)}
                >
                  Удалить
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Stack direction="row" spacing={6} style={{ marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Список свободных устройств
        </Typography>
      </Stack>
      {freeDevices.map((device) => (
        <Card key={device.device_id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                flexDirection="row"
                display="flex"
                alignItems="center"
              >
                <Typography variant="h6">ID устройства: </Typography>
                <Typography variant="body1" marginLeft={"13px"}>
                  {device.device_id}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  style={{ marginLeft: "20px" }}
                  onClick={() => handleAddToGroup(device.device_id, id)}
                >
                  Добавить в группу
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
