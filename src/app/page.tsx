import Form from "./components/Form/Form";
import Navbar from "./components/Nav/Navbar";

export default function Home() {

  return (
    <main className="flex items-center flex-col w-full h-screen bg-[#0d1117]">
      <Navbar />
      <h1 className="text-2xl font-bold">Encontre um perfil do GitHub pelo nome de usuário!</h1>
      <Form />
    </main>
  );
}
