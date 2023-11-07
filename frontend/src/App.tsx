import { Toaster } from "react-hot-toast";
import AppProvider from "./providers/app";
import AppRoutes from "./routes";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      <Toaster />
    </AppProvider>
  );
}

export default App;
