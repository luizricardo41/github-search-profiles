import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <form className="flex gap-5 w-3/5">
          <input className="flex w-full border-2 rounded-md h-12 p-5" type="text" placeholder="Digite um usuário válido do GitHub." />
          <button className="flex border-2 rounded-md h-12 items-center p-5" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </main>
  );
}
