import axios from "axios";

const onLogin = (payload) => {
  const config = {
    method: "POST",
    url: "https://tfitnessapp.azurewebsites.net/api/fitness/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const onRegister = (payload) => {
  const config = {
    method: "POST",
    url: "https://tfitnessapp.azurewebsites.net/api/fitness",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const getExerciseData = (id) => {
  const config = {
    method: "GET",
    url: `https://tfitnessapp.azurewebsites.net/api/fitness/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const getExercisesByDate = (id, date) => {
  const config = {
    method: "GET",
    url: `https://tfitnessapp.azurewebsites.net/api/fitness/${id}/${date}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const GetExerciseType = () => {
  const config = {
    method: "GET",
    url: `https://tfitnessapp.azurewebsites.net/api/fitness/ExerciseType`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const AddExercise = (payload) => {
  const config = {
    method: "POST",
    url: "https://tfitnessapp.azurewebsites.net/api/fitness/addExercise",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const GetUser = (id) => {
  const config = {
    method: "GET",
    url: `https://tfitnessapp.azurewebsites.net/api/fitness/user/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const DeleteExercise = (id) => {
  const config = {
    method: "DELETE",
    url: `https://tfitnessapp.azurewebsites.net/api/fitness/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

const UpdateExercise = (payload) => {
  const config = {
    method: "PUT",
    url: "https://tfitnessapp.azurewebsites.net/api/fitness/UpdateExercise",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  return axios(config);
};

export {
  onLogin,
  getExerciseData,
  onRegister,
  getExercisesByDate,
  GetExerciseType,
  AddExercise,
  GetUser,
  DeleteExercise,
  UpdateExercise,
};
