import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold text-primary">
            Oheor
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Encontrar professores <span className="text-muted-foreground">&gt;</span>
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Seja um Professor <span className="text-muted-foreground">&gt;</span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="default">
            Entrar
          </Button>
          <Button variant="animated" size="default">
            Registrar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
