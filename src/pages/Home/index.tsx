import { useGlobalState } from "../../Context/GlobalContext";

function Home() {
  const { auth } = useGlobalState()

  return (
      <h1>Usuário {auth?.user.name.toUpperCase()} logado.</h1>
  );
}

export default Home;
