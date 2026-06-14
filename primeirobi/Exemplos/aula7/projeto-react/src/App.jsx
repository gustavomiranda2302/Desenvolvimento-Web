import Button from "./components/Button";
import Cabecalho from "./components/Cabecalho";

export default function App() {
  const nome = "bubassauro"
  
  function teste() {
    console.log("teste")
  }

  return (
    <main>
      <Cabecalho titulo="AAAAAAA" />
      <h1 className="">
        ola {nome}
      </h1>
      <Button textoBtn="clique aqui" funcao={teste} />

    </main>

  );
}