import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import css from "./input.module.css"

type InputProps = {
    label: string;
    register: any; //UseFormRegister<IFormValues>;
    required: boolean;
    type: string;
};

const Input = ({ label, register, required, type = "text" }: InputProps) => (
    <div className={css.box}>
        <label className={css.label}>{label}</label>
        <input className={css.field} type={type} {...register(label, { required })} />
    </div>
);

export default Input