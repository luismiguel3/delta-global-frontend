import { UseFormReset, UseFormHandleSubmit } from "react-hook-form";
import { string } from "yup";

export type PhotoProps = {
  image: string;
  name: string;
};
export interface CreateEditSubmitProps {
  reset: UseFormReset;
  handleSubmit: UseFormHandleSubmit;
  submitPhoto: (id: number, photo: PhotoProps) => Promise<void>;
}

export interface StudentProps {
  id: number;
  name: string;
  email: string;
  photo: PhotoProps;
  phone: string;
  address: string;
  institution: string;
  course: string;
}
