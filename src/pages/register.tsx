import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/Input";
import { api } from "../services/api";

type Inputs = {
  email: string,
  password: string
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    const { Email: email, Senha: password } = await data
    data = { email, password }
    try {
      const res = await api().post("/register", data)
      console.log({ res })
    } catch (e: any) {
      const {status, statusText} = e.response
      console.log({ 
        status, 
        statusText,
        response: e.response
      })+
      if (status == 400) {
        ("Email", "Email já existe", "please choose a different username");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" label="Email" register={register} required />
      <Input type="password" label="Senha" register={register} required />
      <input type="submit" />
    </form>
  );
}