import MainProvider from "./contexts/MainProvider";
import Rotas from "./routes/Rotas";

function App() {
  return (
    <>
      <MainProvider>
        <Rotas />
      </MainProvider>
    </>
  );
}

export default App;
