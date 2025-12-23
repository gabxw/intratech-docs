import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  FileText, 
  Database, 
  Truck, 
  Building2, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Home,
  Search,
  ExternalLink,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  section?: string;
}

const navigation: NavItem[] = [
  {
    title: "Visão Geral",
    href: "/",
    icon: <Home className="w-4 h-4" />,
    section: "1"
  },
  {
    title: "Arquitetura",
    href: "/arquitetura",
    icon: <Layers className="w-4 h-4" />,
    section: "2",
    children: [
      { title: "Stack Tecnológica", href: "/arquitetura#stack", section: "2.1" },
      { title: "Estrutura de Diretórios", href: "/arquitetura#estrutura", section: "2.2" },
      { title: "Padrão MVC", href: "/arquitetura#mvc", section: "2.3" },
    ]
  },
  {
    title: "Módulo Comercial",
    href: "/comercial",
    icon: <BarChart3 className="w-4 h-4" />,
    section: "3",
    children: [
      { title: "Comissões", href: "/comercial#comissoes", section: "3.1" },
      { title: "Faturamento", href: "/comercial#faturamento", section: "3.2" },
      { title: "Financeiro", href: "/comercial#financeiro", section: "3.3" },
    ]
  },
  {
    title: "Módulo Logística",
    href: "/logistica",
    icon: <Truck className="w-4 h-4" />,
    section: "4",
    children: [
      { title: "Agendamentos", href: "/logistica#agendamentos", section: "4.1" },
      { title: "Romaneio", href: "/logistica#romaneio", section: "4.2" },
      { title: "Controle de Pátio", href: "/logistica#patio", section: "4.3" },
    ]
  },
  {
    title: "Módulo Compras",
    href: "/compras",
    icon: <ShoppingCart className="w-4 h-4" />,
    section: "5",
    children: [
      { title: "Requisições", href: "/compras#requisicoes", section: "5.1" },
      { title: "Aprovações", href: "/compras#aprovacoes", section: "5.2" },
      { title: "Mapa de Cotação", href: "/compras#cotacao", section: "5.3" },
    ]
  },
  {
    title: "Módulo Gerencial",
    href: "/gerencial",
    icon: <Building2 className="w-4 h-4" />,
    section: "6",
    children: [
      { title: "DRE", href: "/gerencial#dre", section: "6.1" },
      { title: "Lançamentos", href: "/gerencial#lancamentos", section: "6.2" },
      { title: "Rateios", href: "/gerencial#rateios", section: "6.3" },
    ]
  },
  {
    title: "Models",
    href: "/models",
    icon: <Database className="w-4 h-4" />,
    section: "7",
    children: [
      { title: "User", href: "/models#user", section: "7.1" },
      { title: "Company", href: "/models#company", section: "7.2" },
      { title: "Logistics", href: "/models#logistics", section: "7.3" },
    ]
  },
  {
    title: "Cadastros",
    href: "/cadastros",
    icon: <Users className="w-4 h-4" />,
    section: "8",
    children: [
      { title: "Usuários", href: "/cadastros#usuarios", section: "8.1" },
      { title: "Empresas", href: "/cadastros#empresas", section: "8.2" },
      { title: "Permissões", href: "/cadastros#permissoes", section: "8.3" },
    ]
  },
];

function NavItemComponent({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(location.startsWith(item.href) || item.href === "/");
  const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <Link href={item.href}>
        <div
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 group cursor-pointer rounded-lg mx-2",
            depth === 0 ? "font-medium" : "text-muted-foreground",
            isActive 
              ? "text-primary bg-primary/10" 
              : "hover:text-primary hover:bg-primary/5"
          )}
          style={{ paddingLeft: `${depth * 12 + 16}px` }}
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          {item.section && (
            <span className={cn(
              "text-xs font-mono w-6 h-6 rounded flex items-center justify-center",
              isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>
              {item.section}
            </span>
          )}
          {item.icon && <span className={cn(isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")}>{item.icon}</span>}
          <span className="flex-1">{item.title}</span>
          {hasChildren && (
            <span className="text-muted-foreground">
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
          )}
        </div>
      </Link>
      {hasChildren && isOpen && (
        <div className="ml-4 pl-4 border-l-2 border-primary/20">
          {item.children!.map((child) => (
            <NavItemComponent key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-primary/10"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GR</span>
            </div>
            <span className="font-semibold text-sm">Intratech Docs</span>
          </div>
          <div className="w-10" />
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border transition-transform duration-300",
          "lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg glow-orange">
                <span className="text-primary-foreground font-bold text-lg">GR</span>
              </div>
              <div>
                <h1 className="font-bold text-lg tracking-tight">Grupo Roma</h1>
                <p className="text-xs text-muted-foreground">Documentação Intratech</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="tech-badge bg-primary/10 text-primary">v1.0</span>
              <span className="tech-badge bg-secondary text-secondary-foreground">Laravel 11</span>
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar na documentação..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-sidebar-accent border-sidebar-border text-sm"
              />
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <NavItemComponent key={item.href} item={item} />
              ))}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <a
              href="https://github.com/gabxw/teste-intratech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver no GitHub</span>
            </a>
            <p className="mt-2 text-xs text-muted-foreground/60">
              Última atualização: 23/12/2024
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
