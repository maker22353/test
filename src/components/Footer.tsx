import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Fale Conosco", href: "#" },
    { label: "Conta e Segurança", href: "#" },
    { label: "Termos e condições de uso", href: "#" },
    { label: "Código de conduta", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Sobre Nós", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Oh<span className="text-primary">Prof!</span>
          </h2>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="mb-8">
          <p className="text-center text-white/60 mb-4 text-sm">Social</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© Copyright 2025 - OhProf - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
