"use client";

import "../../styles/Input.css";
import "../../styles/Label.css";
import RedButton from "@/app/components/RedButton";
import props from "@/app/types/props/FormProps";
import { userData } from "@/app/types/interfaces/Data";
import { newUserSchema, userSchema } from "@/app/helpers/ValidateInputs";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ sendMessage, inputs }: props) {
  const router = useRouter();
  const [invalidPassword, setInvallidPassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<userData>({
    resolver: zodResolver(
      sendMessage === "Ingresar" ? userSchema : newUserSchema
    ),
  });
  const onSubmit: SubmitHandler<userData> = (data) => {
    validatePassword();
    if (!invalidPassword || !("conPassword" in data)) {
      router.push("/shopping");
    }
  };
  const validatePassword = () => {
    const values = getValues();
    setInvallidPassword(
      "conPassword" in values && values.password != values.conPassword
    );
  };

  return (
    <form
      className="w-[100%] h-[100%] p-10 flex flex-col my-[5%] overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputs.map((value, index) => {
        return (
          <>
            <label key={index} htmlFor={value.id} className="label">
              {value.content}:
            </label>
            <input
              key={index * 2 + 1}
              type="text"
              id={value.id}
              placeholder={value.placeHolder}
              className="text-input"
              {...register(value.id)}
              onChange={
                value.id === "conPassword" ? validatePassword : () => {}
              }
            />
            {errors[value.id as keyof userData]?.message && (
              <label className="label-error">
                {errors[value.id as keyof userData]?.message}
              </label>
            )}
          </>
        );
      })}
      {invalidPassword ? (
        <label className="label-error">La contraseña no coincide</label>
      ) : (
        ""
      )}
      <button type="submit" disabled={isSubmitting}>
        <RedButton
          content={`${sendMessage}`}
          leftRounded={true}
          rightRounded={true}
        />
      </button>
    </form>
  );
}
