import { DollarSign, Clock, Target, Smartphone, Trophy, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: DollarSign,
    title: "Ganhe uma renda extra diariamente",
    description: "Defina seu próprio preço e torna suas paixões em lucros. Professores ganham em torno de R$ 10.000 por aula",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Ensine quando quiser, onde quiser. Monte sua agenda de acordo com sua disponibilidade e estilo de vida",
  },
  {
    icon: Target,
    title: "Alunos Qualificados",
    description: "Nossa plataforma conecta você com alunos motivados e comprometidos com a aprendizagem",
  },
  {
    icon: Smartphone,
    title: "Tecnologia Avançada",
    description: "Ferramentas intuitivas para aprendizando, pagamento integrado e comunicação totalmente integrada",
  },
  {
    icon: Trophy,
    title: "Reconhecimento",
    description: "Sistema de avaliações que destaca seu trabalho e ajuda a construir sua reputação de excelência",
  },
  {
    icon: Handshake,
    title: "Suporte Total",
    description: "Equipe dedicada para ajudar você a obter sucesso, desde o cadastro até a realização das aulas",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
