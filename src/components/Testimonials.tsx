import { Card } from "@/components/ui/card";

const testimonials = [
  {
    initials: "JP",
    name: "João Pedro",
    role: "Professor de Matemática",
    text: "Em 6 meses no OhProf, consegui triplicar minha renda dando aulas online. A plataforma é intuitiva e transparente, sempre fui tratado com respeito.",
  },
  {
    initials: "CA",
    name: "Carlos Andrade",
    role: "Professor de Inglês",
    text: "O sistema de pagamentos é muito eficiente. Recebo meus pagamentos com agilidade e o suporte sempre me ajuda quando preciso.",
  },
  {
    initials: "CL",
    name: "Carmen Lúcia",
    role: "Professora de Química",
    text: "A flexibilidade de horários me permitiu conciliar dando aulas enquanto faço meu doutorado para todos os meus alunos.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          O que nossos professores dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <p className="text-white mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
