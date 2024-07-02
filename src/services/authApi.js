import axios from "axios";


export const BASE_URL = "http://localhost:3030";

export const instance = axios.create({
  baseURL: BASE_URL,

});

// instance.interceptors.response.use((response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     console.log(localStorage.getItem("persist:auth"));
//     // Проверка, что ответ есть и статус 401   
//     if (error.response && error.response.status === 401) {
//       // Проверка, что запрос еще не пытался обновить токен    
//       if (!originalRequest._retry) {
//         originalRequest._retry = false;
//         try {          // Запрос на обновление токена
//           const data = await requestRefreshToken();
//           // Проверка, что новый токен получен         
//           if (data && data.token) {
//             setToken(data.token); originalRequest.headers.Authorization = `Bearer ${data.token}`;
//             // Повторный запрос с новым токеном           
//             return instance(originalRequest);
//           } else {
//             throw new Error('Token refresh failed');
//           }
//         } catch (refreshError) {
//           // В случае ошибки обновления токена, выходим из системы        
//           await requestLogOut();
//           localStorage.removeItem("persist:auth")
//           clearToken();
//           return Promise.reject(refreshError);
//         }
//       }
//       // Если запрос уже пытался обновить токен, и снова 401, выходим из системы
//       await requestLogOut(); clearToken();
//     }
//     return Promise.reject(error);
//   }
// );

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};


export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/api/users/register", formData);

  return data;
};
export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/api/users/login", formData);
  setToken(data.token);
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/api/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/api/users/logout");

  return data;
};

export const requestUpdate = async (body) => {
  const data = await instance.patch("/api/users/update", body);

  return data;
};

export const requestGoogleSignUp = async () => {
  const { data } = await instance.get("/api/auth/google");
  setToken(data.token);
};

export const requestPasswordRecover = async (email) => {
  const { data } = await instance.post("/api/users/password/send/email", {
    email,
  });
  return data;
};

export const requestResetPassword = async (body) => {
  const data = await instance.post("/api/users/password/save", body);
  return data;
};


export const requestRefreshToken = async () => {

  const { data } = await instance.post("/api/users/refreshing");
  const { token, refreshToken } = data;
  setToken(token);

  return { token, refreshToken };

};

