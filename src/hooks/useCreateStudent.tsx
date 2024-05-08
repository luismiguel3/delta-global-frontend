import { mutate } from "swr";
import { toast } from "react-toastify";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import { CreateEditSubmitProps, StudentProps } from "../types";
import { createStudent } from "../services/student";

export default function useCreateStudent({
  reset,
  handleSubmit,
  submitPhoto,
}: CreateEditSubmitProps) {
  const { setCreateEditOpen } = useModalsDashboardStore();

  const submit = async (data: StudentProps) => {
    try {
      const { photo, ...body } = data;
      
      const student = await createStudent(body);
      if (data.photo) await submitPhoto(student.id, data.photo);

      toast.success("Aluno cadastrado com sucesso");
      setCreateEditOpen(false);
      mutate("/student");
      reset();
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    }
  };
  return {
    submit: handleSubmit(submit),
  };
}
