import api from "./api";
import { StudentProps } from "../types";

export async function getAllStudents() {
  return await api.get("/students").then((response) => response.data);
}

export async function getStudent(id: number | null) {
  return await api.get(`/student/${id}`).then((response) => response.data);
}

export async function createStudent(data: Omit<StudentProps, "photo">) {
  return await api.post("/student", data).then((response) => response.data);
}

export async  function editStudent(data: Omit<StudentProps, "photo">, id: number) {
  return await api.put(`/student/${id}`, data).then((response) => response.data);
}

export async function deleteStudent(id: number | null) {
  return await api.delete(`/student/${id}`).then((response) => response.data);
}
