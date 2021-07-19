import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string,
    emailRequired: string
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" label="Email" {...register("email", { required: true, pattern: /^[A-Za-z]+$/i })} />
      <input type="password" {...register("password", { required: true })} />
      <input type="confirmPassword" {...register("confirmPassword", { required: true })} />
      {errors.emailRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}