// Данные пользователей
export const users = [
  {
    user_id: 1,
    full_name: "Иванов Иван Иванович",
    phone: "+375291234567",
    registration_date: "2023-01-15T10:00:00Z",
    device_serial_number: "SN123456",
    password_hash:
      "$2y$10$e0MYFq9CjB0q2rJY4qP8F.3kKQf1X9HjZ5M5OZ7Ewz1W1W2Y3Z4c.",
  },
  {
    user_id: 2,
    full_name: "Петров Петр Петрович",
    phone: "+375291234568",
    registration_date: "2023-02-10T11:30:00Z",
    device_serial_number: "SN654321",
    password_hash:
      "$2y$10$e0MYFq9CjB0q2rJY4qP8F.3kKQf1X9HjZ5M5OZ7Ewz1W1W2Y3Z4c.",
  },
  {
    user_id: 3,
    full_name: "Сидоров Сидор Сидорович",
    phone: "+375291234569",
    registration_date: "2023-03-05T09:00:00Z",
    device_serial_number: "SN789012",
    password_hash:
      "$2y$10$e0MYFq9CjB0q2rJY4qP8F.3kKQf1X9HjZ5M5OZ7Ewz1W1W2Y3Z4c.",
  },
];

// Данные администраторов
export const administrators = [
  {
    admin_id: 1,
    full_name: "Алексеев Алексей Алексеевич",
    password_hash:
      "$2y$10$e0MYFq9CjB0q2rJY4qP8F.3kKQf1X9HjZ5M5OZ7Ewz1W1W2Y3Z4c.",
  },
  {
    admin_id: 2,
    full_name: "Кузнецов Кирилл Сергеевич",
    password_hash:
      "$2y$10$e0MYFq9CjB0q2rJY4qP8F.3kKQf1X9HjZ5M5OZ7Ewz1W1W2Y3Z4c.",
  },
];

// Данные устройств
export const devices = [
  {
    device_id: 1,
    owner_id: 1,
    connection_status: true,
    loaded_ads: ["ad1", "ad2", "ad3"],
  },
  {
    device_id: 2,
    owner_id: 2,
    connection_status: false,
    loaded_ads: ["ad4", "ad5"],
  },
  {
    device_id: 3,
    owner_id: 3,
    connection_status: true,
    loaded_ads: ["ad6"],
  },
];

// Данные расписания
export const schedules = [
  {
    schedule_id: 1,
    ad_id: "ad1",
    display_frequency_per_hour: 5,
    device_id: 1,
  },
  {
    schedule_id: 2,
    ad_id: "ad4",
    display_frequency_per_hour: 3,
    device_id: 2,
  },
  {
    schedule_id: 3,
    ad_id: "ad6",
    display_frequency_per_hour: 4,
    device_id: 3,
  },
];

// Данные логов
export const logs = [
  {
    log_id: 1,
    user_id: 1,
    action_type: "LOGIN",
    action_timestamp: "2023-01-16T08:00:00Z",
    device_id: 1,
    details: "User logged in successfully.",
  },
  {
    log_id: 2,
    user_id: 2,
    action_type: "LOGOUT",
    action_timestamp: "2023-02-11T12:00:00Z",
    device_id: 2,
    details: "User logged out successfully.",
  },
  {
    log_id: 3,
    user_id: 1,
    action_type: "AD_LOADED",
    action_timestamp: "2023-01-16T09:00:00Z",
    device_id: 1,
    details: "Ad loaded successfully.",
  },
];

// Данные статистики рекламных роликов
export const adStatistics = [
  {
    stat_id: 1,
    ad_id: "ad1",
    device_id: 1,
    display_time: "2023-01-16T09:00:00Z",
    duration_seconds: 30,
  },
  {
    stat_id: 2,
    ad_id: "ad4",
    device_id: 2,
    display_time: "2023-02-11T12:30:00Z",
    duration_seconds: 45,
  },
  {
    stat_id: 3,
    ad_id: "ad6",
    device_id: 3,
    display_time: "2023-03-06T10:20:00Z",
    duration_seconds: 60,
  },
];
