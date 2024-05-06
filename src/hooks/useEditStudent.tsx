import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { useModalsDashboardStore } from "../context/useModalsDashboardStore";

export default function useEditStudent({ reset }: any) {
  const { id, createEdit } = useModalsDashboardStore();
  const [loading, setLoading] = useState(false);

  const is_edit = useMemo(() => id && createEdit, [id, createEdit]);

  useEffect(() => {
    if (is_edit) getUsers();
  }, [is_edit]);

  async function getUsers() {
    setLoading(true);
    try {
      const { data } = await api.get(`/student/${id}`);
      handleGetEditUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleGetEditUser(data: any) {
    reset({
      name: data.name,
      email: data.email,
      phone: data.phone,
      photo: data.photo,
      address: data.address,
      institution: data.institution,
      course: data.course,
    });
  }

  return { loading };
}
