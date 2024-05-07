import { useEffect, useMemo, useState } from "react";
// import api from "../services/api";
// import { useModalsDashboardStore } from "../context/useModalsDashboardStore";

export default function useEditStudent(handleSubmit: any) {
  const [loading, setLoading] = useState(false);
  async function submit(data: any) {
    console.log("EDITARRRRRR", data);
  }
  return { submit: handleSubmit(submit) };
}
