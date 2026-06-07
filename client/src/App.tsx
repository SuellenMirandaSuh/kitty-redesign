import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routes } from "@/lib/routes";
import BlastsFromThePast from "@/pages/BlastsFromThePast";
import Cleveland2600 from "@/pages/Cleveland2600";
import DogFood from "@/pages/DogFood";
import Home from "@/pages/Home";
import Icq from "@/pages/Icq";
import InsaneInfo from "@/pages/InsaneInfo";
import Jane from "@/pages/Jane";
import Kritters from "@/pages/Kritters";
import LakeviewCemetery from "@/pages/LakeviewCemetery";
import NotFound from "@/pages/NotFound";
import PamelaDonovan from "@/pages/PamelaDonovan";
import Places from "@/pages/Places";
import Quotes from "@/pages/Quotes";
import WackoWeb from "@/pages/WackoWeb";
import Winter from "@/pages/Winter";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRouter() {
  return (
    <Router base={routerBase}>
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path={routes.insaneInfo} component={InsaneInfo} />
        <Route path={routes.places} component={Places} />
        <Route path={routes.quotes} component={Quotes} />
        <Route path={routes.pamelaDonovan} component={PamelaDonovan} />
        <Route path={routes.blastsFromThePast} component={BlastsFromThePast} />
        <Route path={routes.dogFood} component={DogFood} />
        <Route path={routes.jane} component={Jane} />
        <Route path={routes.lakeviewCemetery} component={LakeviewCemetery} />
        <Route path={routes.kritters} component={Kritters} />
        <Route path={routes.wackoWeb} component={WackoWeb} />
        <Route path={routes.cleveland2600} component={Cleveland2600} />
        <Route path={routes.winter} component={Winter} />
        <Route path={routes.icq} component={Icq} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
