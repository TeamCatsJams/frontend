import RouteProvider from "../Components/Providers/RouteProvider";
import AppProvider from "../Components/Providers/AppProvider";
function App() {
  return (
    <>
      <AppProvider>
        <RouteProvider />
      </AppProvider>
    </>
  );
}

export default App;
