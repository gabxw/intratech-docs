import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Folder, 
  FileCode, 
  Database, 
  Globe,
  Server,
  Layers,
  ArrowRight
} from "lucide-react";

const directoryStructure = [
  { name: "app/", description: "Código principal da aplicação", icon: <Folder className="w-4 h-4" />, indent: 0 },
  { name: "├── Actions/", description: "Classes de ações reutilizáveis", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Console/Commands/", description: "Comandos Artisan customizados", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Enums/", description: "Enumerações (StatusDeliverySchedule, etc.)", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Http/Controllers/", description: "Controllers da aplicação", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Http/Middleware/", description: "Middlewares customizados", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Http/Requests/", description: "Form Requests para validação", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Mail/", description: "Classes de e-mail (Mailable)", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "├── Models/", description: "Models Eloquent", icon: <Database className="w-4 h-4" />, indent: 1 },
  { name: "└── Providers/", description: "Service Providers", icon: <FileCode className="w-4 h-4" />, indent: 1 },
  { name: "config/", description: "Arquivos de configuração", icon: <Folder className="w-4 h-4" />, indent: 0 },
  { name: "database/", description: "Migrações, factories e seeders", icon: <Database className="w-4 h-4" />, indent: 0 },
  { name: "resources/views/", description: "Views Blade", icon: <Globe className="w-4 h-4" />, indent: 0 },
  { name: "routes/web.php", description: "Definição de rotas", icon: <FileCode className="w-4 h-4" />, indent: 0 },
];

const mvcFlow = [
  { step: "1", title: "Requisição HTTP", description: "Cliente envia requisição" },
  { step: "2", title: "Middleware", description: "Autenticação e validação" },
  { step: "3", title: "Controller", description: "Lógica de negócio" },
  { step: "4", title: "Model", description: "Acesso ao banco" },
  { step: "5", title: "View", description: "Renderização HTML" },
  { step: "6", title: "Resposta", description: "Retorno ao cliente" },
];

export default function Arquitetura() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">2</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            ARQUITETURA
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Arquitetura</span>
          <span className="text-muted-foreground font-normal"> do Sistema</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O Intratech segue o padrão <span className="text-primary font-semibold">Model-View-Controller (MVC)</span> do 
          Laravel, com uma estrutura organizada que facilita a manutenção e expansão do sistema.
        </p>
      </div>

      {/* Stack Tecnológica */}
      <section id="stack" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">2.1</div>
          <h2 className="text-xl font-bold">Stack Tecnológica</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Backend */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Tecnologia</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Versão</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">PHP</td>
                    <td className="py-2">8.2+</td>
                    <td className="py-2 text-muted-foreground">Linguagem principal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">Laravel</td>
                    <td className="py-2">11.x</td>
                    <td className="py-2 text-muted-foreground">Framework MVC</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">SQL Server</td>
                    <td className="py-2">-</td>
                    <td className="py-2 text-muted-foreground">Banco de dados</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-primary font-semibold">Composer</td>
                    <td className="py-2">2.x</td>
                    <td className="py-2 text-muted-foreground">Gerenciador de deps</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Frontend */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Tecnologia</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Uso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">Blade</td>
                    <td className="py-2 text-muted-foreground">Template engine do Laravel</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">HTML5/CSS3</td>
                    <td className="py-2 text-muted-foreground">Estrutura e estilização</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-primary font-semibold">JavaScript</td>
                    <td className="py-2 text-muted-foreground">Interatividade</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-primary font-semibold">Bootstrap</td>
                    <td className="py-2 text-muted-foreground">Framework CSS</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Estrutura de Diretórios */}
      <section id="estrutura" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">2.2</div>
          <h2 className="text-xl font-bold">Estrutura de Diretórios</h2>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="font-mono text-sm space-y-1">
              {directoryStructure.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 py-1.5 hover:bg-primary/5 px-3 rounded-lg transition-colors"
                  style={{ paddingLeft: `${item.indent * 20 + 12}px` }}
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-primary font-semibold">{item.name}</span>
                  <span className="text-muted-foreground text-xs">// {item.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Padrão MVC */}
      <section id="mvc" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">2.3</div>
          <h2 className="text-xl font-bold">Padrão MVC</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O sistema segue o padrão Model-View-Controller do Laravel, onde cada componente tem uma 
          responsabilidade específica. O fluxo de uma requisição passa por várias camadas até 
          retornar a resposta ao cliente.
        </p>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Fluxo de Requisição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {mvcFlow.map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors min-w-[100px]">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < mvcFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Example */}
        <div>
          <p className="text-sm text-muted-foreground mb-3 font-mono">// Exemplo de fluxo no Controller</p>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`// 1. Rota define o Controller e método
Route::get('/usuarios', [UserController::class, 'index']);

// 2. Middleware verifica autenticação
public static function middleware(): array {
    return ['userIsAuthenticate'];
}

// 3. Controller processa a requisição
public function index() {
    // 4. Model busca dados no banco
    $users = $this->user->orderBy('name')->paginate(15);
    
    // 5. View renderiza o HTML
    return view('users.index', ['users' => $users]);
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conexões de Banco */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">2.4</div>
          <h2 className="text-xl font-bold">Conexões de Banco de Dados</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Conexão Principal</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Banco de dados do Intratech onde são armazenados todos os dados do sistema.
              </p>
              <code className="text-xs bg-primary/10 px-3 py-1.5 rounded-lg font-mono text-primary">
                DB::connection('mysql')
              </code>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Conexão DealerNet</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Integração com o ERP de concessionárias para consultas de vendas, veículos e clientes.
              </p>
              <code className="text-xs bg-primary/10 px-3 py-1.5 rounded-lg font-mono text-primary">
                DB::connection('dealernet')
              </code>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
