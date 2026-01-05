import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  BarChart3, 
  ShoppingCart, 
  Building2, 
  Database, 
  Users,
  Server,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Link } from "wouter";

const modules = [
  {
    title: "Comercial",
    description: "Gestão de comissões, vendas VN/VD/VU e faturamento de veículos.",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "/comercial",
    section: "3",
  },
  {
    title: "Logística",
    description: "Agendamento de entregas, romaneios e controle de pátio.",
    icon: <Truck className="w-6 h-6" />,
    href: "/logistica",
    section: "4",
  },
  {
    title: "Compras",
    description: "Requisições, aprovações e mapas de cotação.",
    icon: <ShoppingCart className="w-6 h-6" />,
    href: "/compras",
    section: "5",
  },
  {
    title: "Gerencial",
    description: "DRE, lançamentos contábeis e parâmetros de rateio.",
    icon: <Building2 className="w-6 h-6" />,
    href: "/gerencial",
    section: "6",
  },
  {
    title: "Models",
    description: "Documentação completa dos modelos de dados Eloquent.",
    icon: <Database className="w-6 h-6" />,
    href: "/models",
    section: "7",
  },
  {
    title: "Cadastros",
    description: "Usuários, empresas, departamentos e permissões.",
    icon: <Users className="w-6 h-6" />,
    href: "/cadastros",
    section: "8",
  },
];

const techStack = [
  { name: "PHP 8.2+", icon: <Server className="w-4 h-4" /> },
  { name: "Laravel 11", icon: <Zap className="w-4 h-4" /> },
  { name: "SQL Server", icon: <Database className="w-4 h-4" /> },
  { name: "Blade", icon: <Globe className="w-4 h-4" /> },
];

const integrations = [
  { name: "DealerNet", description: "ERP de concessionárias" },
  { name: "Via Nuvem", description: "Gestão documental" },
  { name: "Senior", description: "Sistema de RH" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">1</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            VISÃO GERAL
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Intratech</span>
          <span className="text-muted-foreground font-normal"> Docs</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Documentação técnica completa do sistema de gestão interna desenvolvido para o 
          <span className="text-primary font-semibold"> Grupo Roma</span>, uma rede de concessionárias de veículos. 
          Este guia fornece todas as informações necessárias para desenvolvedores que precisam 
          entender, manter ou expandir o sistema.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Controllers", value: "15+", delay: "stagger-1" },
          { label: "Models", value: "40+", delay: "stagger-2" },
          { label: "Rotas", value: "200+", delay: "stagger-3" },
          { label: "Integrações", value: "3", delay: "stagger-4" },
        ].map((stat) => (
          <Card key={stat.label} className={`card-hover animate-fade-in-up ${stat.delay}`}>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">1.1</div>
          <h2 className="text-xl font-bold">Stack Tecnológica</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <span className="text-primary">{tech.icon}</span>
              <span className="font-medium text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Grid */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">1.2</div>
          <h2 className="text-xl font-bold">Módulos do Sistema</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((module, index) => (
            <Link key={module.href} href={module.href}>
              <Card className={`card-hover cursor-pointer group animate-fade-in-up stagger-${index + 1}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                        {module.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </CardTitle>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {module.section}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">1.3</div>
          <h2 className="text-xl font-bold">Integrações Externas</h2>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <div key={integration.name} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Getting Started */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">1.4</div>
          <h2 className="text-xl font-bold">Como Usar Esta Documentação</h2>
        </div>
        
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Navegação</h3>
                  <p className="text-sm text-muted-foreground">
                    Use o menu lateral para navegar entre os módulos. Cada seção é numerada 
                    seguindo o padrão de documentação técnica.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Busca</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilize a barra de busca para encontrar rapidamente controllers, 
                    models ou funcionalidades específicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Código</h3>
                  <p className="text-sm text-muted-foreground">
                    Exemplos de código estão formatados em blocos destacados. 
                    Copie e adapte conforme necessário.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
