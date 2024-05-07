//import { yupResolver } from "@hookform/resolvers/yup";
//import { useForm } from "react-hook-form";
//import { mutate } from "swr";
//import * as yup from "yup";
// import { toast } from "react-toastify";
// import api from "../services/api";
// import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
// import base64toBlob from "../utils/base64toBlob";
import { useFormContext } from "react-hook-form";

export default function useCreateStudent(handleSubmit: any) {
  async function testeee(data: any) {
    console.log("data", data);
    // const { name, email, phone, address, institution, course, photo } = data;
    // const { image, name: photoName } = photo;

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("address", address);
    // formData.append("institution", institution);
    // formData.append("course", course);
    // //formData.append("photo", base64toBlob(image), photoName);

    // try {
    //   await api.post("/student", formData);
    //   mutate("/student");
    //   toast.success("Aluno cadastrado com sucesso!");
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Erro ao cadastrar aluno");
    // }
  }
  return { submit: handleSubmit(testeee) };
}
