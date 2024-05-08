import api from "../services/api";
import swr, { mutate } from "swr";
import { toast } from "react-toastify";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import { CreateEditSubmitProps, StudentProps, PhotoProps } from "../types";

export default function useEditStudent({
  handleSubmit,
  reset,
  submitPhoto,
}: CreateEditSubmitProps) {
  const { id, setCreateEditOpen } = useModalsDashboardStore();
  const { isLoading } = swr(`/student/${id}`, getSudent);

  async function getSudent() {
    const response = await api.get(`/student/${id}`);
    resetFields(response.data);
    return response.data;
  }

  async function resetFields(data: StudentProps) {
    reset(data);
  }

  function photoChanged(photo: PhotoProps) {
    return !photo.image.startsWith("http://localhost");
  }

  async function submit(data: StudentProps) {
    try {
      const { photo, ...body } = data;

      await api.put(`/student/${id}`, body);

      if (photo && photoChanged(photo)) await submitPhoto(id!, photo);

      toast.success("Aluno editado com sucesso");
      setCreateEditOpen(false);
      mutate("/users");
      reset();
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    }
  }
  return { submit: handleSubmit(submit), isLoading };
}
