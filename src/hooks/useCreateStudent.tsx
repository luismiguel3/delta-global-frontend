import react, { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import swr, { mutate } from "swr";
import * as yup from "yup";
import { toast } from "react-toastify";
import api from "../services/api";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import base64toBlob from "../utils/base64toBlob";

export default function useCreateStudent() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string(),
    address: yup.string(),
    photo: yup
      .object({
        image: yup.string(),
        name: yup.string(),
      })
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      photo: null,
    },
  });

  const submitPhoto = async (id: number, photo: any) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();

    const file = base64toBlob(photo.image, photo.name);
    formData.append("image", file);

    await api.post(`/image/${id}`, formData, config);
  };

  const submit = async (data: any) => {
    try {
      const { data: user } = await api.post("/student", data);

      if (data.photo) await submitPhoto(user.id, data.photo);

      toast.success("Aluno cadastrado com sucesso");
      useModalsDashboardStore.getState().setCreateEditOpen(false);
      mutate("/users");
      reset();
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("photo", {
          image: reader.result as string,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    register,
    errors,
    submit: handleSubmit(submit, (errors) => console.log(errors)),
    handleImageChange,
    reset,
    image: watch("photo"),
  };
}
