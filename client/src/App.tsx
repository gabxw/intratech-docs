import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Arquitetura from "./pages/Arquitetura";
import Comercial from "./pages/Comercial";
import Logistica from "./pages/Logistica";
import Compras from "./pages/Compras";
import Gerencial from "./pages/Gerencial";
import Models from "./pages/Models";
import Cadastros from "./pages/Cadastros";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/arquitetura"} component={Arquitetura} />
      <Route path={"/comercial"} component={Comercial} />
      <Route path={"/logistica"} component={Logistica} />
      <Route path={"/compras"} component={Compras} />
      <Route path={"/gerencial"} component={Gerencial} />
      <Route path={"/models"} component={Models} />
      <Route path={"/cadastros"} component={Cadastros} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
