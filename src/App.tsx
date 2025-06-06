
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient} >
    <ThemeProvider >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index children={<Hero />} />} />
              <Route path="/about" element={<Index children={<About />} />} />
              <Route path="/projects" element={<Index children={<Projects />} />} />
              <Route path="/skills" element={<Index children={<Skills />} />} />
              <Route path="/experience" element={<Index children={<Experience />} />} />
              <Route path="/contact" element={<Index children={<Contact />} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </AnimatePresence>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
