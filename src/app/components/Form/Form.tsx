"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getDadosGithub, initialState, State } from './actions';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const [state, formAction] = useFormState<State | string, FormData>(getDadosGithub, initialState);
  
  useEffect(() => {
    if (typeof state === "string") return setError("user", { message: state });
    if (!!state.login) router.push('/profile');
  }, [setError, state, router])
  
  console.log('STATE ->', state);
  return (
    <div className="flex items-center flex-grow justify-center w-full">
      <form
        action={formAction}
        className="flex gap-5 w-3/5 h-40"
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
