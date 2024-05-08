import swr, { mutate } from "swr";
import { toast } from "react-toastify";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";
import { CreateEditSubmitProps, StudentProps, PhotoProps } from "../types";
import { getStudent, editStudent } from "../services/student";

export default function useEditStudent({
  handleSubmit,
  reset,
  submitPhoto,
}: CreateEditSubmitProps) {
  const { id, setCreateEditOpen } = useModalsDashboardStore();
  const { isLoading } = swr(`/student/edit/${id}`, () =>
    getStudent(id).then((data) => resetFields(data))
  );

  async function resetFields(data: StudentProps) {
    reset(data);
  }

  function photoChanged(photo: PhotoProps) {
    return !photo.image.startsWith("http://localhost");
  }

  async function submit(data: StudentProps) {
    try {
      const { photo, ...body } = data;

      await editStudent(body, id!);

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
