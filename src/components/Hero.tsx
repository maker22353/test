import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(125, 31, 31, 0.7), rgba(125, 31, 31, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Aprender nunca<br />ficou tão fácil!
          </h1>
          
          <Button variant="animated" size="lg" className="text-lg px-8 py-6 h-auto">
            Comece agora!
          </Button>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="flex gap-2 bg-white rounded-lg p-2 shadow-xl">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Disciplina, nome do curso ou palavras chave..."
                  className="flex-1 outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="animated" size="default" className="px-8">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
