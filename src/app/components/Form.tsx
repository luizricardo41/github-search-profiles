"use client"
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getDadosGithub, initialState, State } from './actions';
import { useFormState } from 'react-dom';

type Input = {
  user: string;
}

export default function Form() {
  const {
    register,
    setError,
    clearErrors,
    formState: {errors}
  } = useForm<Input>();

  const [state, formAction] = useFormState<State | string, FormData>(getDadosGithub, initialState);
  
  useEffect(() => {
    if (typeof state === "string") setError("user", { message: state });
  }, [setError, state])
  
  console.log('STATE ->', state);
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action={formAction}
        className="flex justify-center gap-5 w-3/5 h-40"
      >
        <div className="flex flex-col w-full h-15">
          <input
            className="flex w-full border-2 rounded-md h-12 p-5 focus:outline-none focus:border-blue-500 required:border-red-500 focus:required:border-red-500"
            required={!!errors.user?.message}
            type="text"
            placeholder="Digite um usuário válido do GitHub."
            {...register("user", { required: 'O campo é obrigatório!' })}
            onChange={({target}) => target.value === '' && clearErrors("user")}
          />
          {errors.user?.message &&
            <span className="flex pt-3 text-red-600 text-sm">{ errors.user.message }</span>
          }

        </div>
        <button
          className="flex border-2 rounded-md h-12 items-center p-5 focus:outline-none focus:border-blue-500 hover:bg-slate-200"
          type="submit"
        >
          Pesquisar
        </button>
      </form>
    </div>
  )
}
