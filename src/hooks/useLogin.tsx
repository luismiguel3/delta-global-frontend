import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

type Inputs = {
  email: string;
  password: string;
};

export default function useLogin() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: Inputs) => {
    try {
      const response: any = await api.post("/login", data);
      localStorage.setItem("auth", JSON.stringify(response.data));
      toast.success("Login realizado com sucesso");
      useAuth.setState({
        authenticated: true,
        loading: false,
        user: response.data,
      });
      navigate("/dashboard");
    } catch (e: any) {
      toast.error(e?.message || "Erro ao realizar login");
    }
  };

  return {
    register,
    errors,
    submit: handleSubmit(submit),
  };
}
