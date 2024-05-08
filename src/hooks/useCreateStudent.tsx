import { mutate } from "swr";
import { toast } from "react-toastify";
import api from "../services/api";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import { CreateEditSubmitProps, StudentProps } from "../types";

export default function useCreateStudent({
  reset,
  handleSubmit,
  submitPhoto,
}: CreateEditSubmitProps) {
  const { setCreateEditOpen } = useModalsDashboardStore();

  const submit = async (data: StudentProps) => {
    console.log(data);
    try {
      const { data: user } = await api.post("/student", {
        ...data,
        photo: null,
      });

      if (data.photo) await submitPhoto(user.id, data.photo);

      toast.success("Aluno cadastrado com sucesso");
      setCreateEditOpen(false);
      mutate("/users");
      reset();
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    } finally {
    }
  };
  return {
    submit: handleSubmit(submit),
  };
}
