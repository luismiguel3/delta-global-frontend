import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import api from "../services/api";
import base64toBlob from "../utils/base64toBlob";
import { PhotoProps } from "../types";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string(),
  address: yup.string(),
  institution: yup.string(),
  course: yup.string(),
  photo: yup
    .object({
      image: yup.string(),
      name: yup.string(),
    })
    .nullable(),
});

export default function useHandleFields() {
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
      photo: {
        image: "",
      },
    },
  });

  const { setCreateEditOpen, setId } = useModalsDashboardStore();

  const resetFieldsOnClose = () => {
    reset({
      name: "",
      email: "",
      phone: "",
      photo: {
        image: "",
      },
      address: "",
      institution: "",
      course: "",
    });
    setCreateEditOpen(false);
    setId(null!);
  };

  const submitPhoto = async (id: number, photo: PhotoProps) => {
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
    handleImageChange,
    resetFieldsOnClose,
    watch,
    submitProps: {
      reset,
      handleSubmit,
      submitPhoto,
    },
  };
}
