
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PageTransition from "./components/PageTransition";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import GhostMode from "./components/GhostMode";
import ClarityTracker from "./components/ClarityTracker";
import MetaPixelTracker from "./components/MetaPixelTracker";
import Index from "./pages/Index";
import LP from "./pages/LP";
import LPOptions from "./pages/LPOptions";
import LPModelo1 from "./pages/LPModelo1";
import LPModelo2 from "./pages/LPModelo2";
import LPModelo3 from "./pages/LPModelo3";
import LPModelo4 from "./pages/LPModelo4";
import LPCompraEfetuada from "./pages/LPCompraEfetuada";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Envolvendo em uma função componente adequada
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HelmetProvider>
          <div className="overflow-x-hidden w-full">
            <Preloader />
            <ScrollProgress />
            <GhostMode />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ClarityTracker />
              <MetaPixelTracker />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/lp" element={<LP />} />
                  <Route path="/lpoptions" element={<LPOptions />} />
                  <Route path="/lpmodelo1" element={<LPModelo1 />} />
                  <Route path="/lpmodelo2" element={<LPModelo2 />} />
                  <Route path="/lpmodelo3" element={<LPModelo3 />} />
                  <Route path="/lpmodelo4" element={<LPModelo4 />} />
                  <Route path="/lpcompraefetuada" element={<LPCompraEfetuada />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </BrowserRouter>
          </div>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
