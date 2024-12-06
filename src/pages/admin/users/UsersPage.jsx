import { useEffect, useState } from "react";
import { getUsers } from "../../../requests/users/getUsers";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { USER_LOGS_URL } from "../../../navigation/routes";
import { deleteUser } from "../../../requests/users/deleteUser";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (user_id) => {
    try {
      const response = await deleteUser(user_id);
      console.log(response);
      setUsers((prevUsers) => prevUsers.filter((user) => user.ID !== user_id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoLogs = (id) => {
    navigate(USER_LOGS_URL.replace(":userId", id));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Stack direction="row" spacing={6} style={{ marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Список пользователей
        </Typography>
      </Stack>
      {users.map((user) => (
        <Card key={user.ID} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Полное имя:</Typography>
                <Typography variant="body1">{user.FullName}</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">ID:</Typography>
                <Typography variant="body1">{user.ID}</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Телефон:</Typography>
                <Typography variant="body1">{user.Phone}</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Дата регистрации:</Typography>
                <Typography variant="body1">{user.RegistrationDate}</Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h6">Роль:</Typography>
                <Typography variant="body1">
                  {user.RoleID === 1 ? "Пользователь" : "Администратор"}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => handleDelete(user.ID)}
                >
                  Удалить
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleGoLogs(user.ID)}
                >
                  Просмотр логов
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default UsersPage;
