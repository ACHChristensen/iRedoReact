import axios, { type AxiosRequestConfig } from "axios";

export interface Response<T> {
  // TODO: eslint?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _embedded: any;
  count: number;
  next: string | null;
  results: T[];
}

export interface SpringDataResponse<T> {
  _embedded?: { [key: string]: T[] };
  //TODO: eslint?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _links?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page?: any;
}


// Create Axios instance with baseURL from Vite env
const axiosInstance = axios.create({
  baseURL: import.meta.env["VITE_API_URL"], // make sure it's "http://localhost:8080"
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc2NDE2OTg3MywiZXhwIjoxNzY0MTczNDczfQ.CbWOgg0-Zr4AGrzfrg4ZZvVnaROdwh5Kj-cm20L3SHY",
  },
});

// Optional: Axios interceptor to automatically add JWT to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken"); // store JWT after login
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => {
        console.error("API getAll error:", err);
        throw err;
      });
  };

  getById = (id: number) =>
    axiosInstance
      .get<Response<T>>(`${this.endpoint}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        console.error("API getById error:", err);
        throw err;
      });

  delete = (id: number) =>
    axiosInstance
      .delete(`${this.endpoint}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        console.error("API delete error:", err);
        throw err;
      });

  create = (data: Partial<T>) =>
    axiosInstance
      .post<Response<T>>(this.endpoint, data)
      .then((res) => res.data)
      .catch((err) => {
        console.error("API create error:", err);
        throw err;
      });

  update = (id: number, data: Partial<T>) =>
    axiosInstance
      .put<Response<T>>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data)
      .catch((err) => {
        console.error("API update error:", err);
        throw err;
      });
}

export default ApiClient;
