import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building,
  FolderTree,
  Shield,
  UserCheck,
  Settings
} from "lucide-react";

const userMethods = [
  { method: "index()", description: "Lista todos os usuários", route: "GET /usuarios" },
  { method: "create()", description: "Formulário de novo usuário", route: "GET /usuarios/criar" },
  { method: "store()", description: "Salva novo usuário", route: "POST /usuarios" },
  { method: "edit()", description: "Formulário de edição", route: "GET /usuarios/{id}/editar" },
  { method: "update()", description: "Atualiza usuário", route: "PUT /usuarios/{id}" },
  { method: "destroy()", description: "Desativa usuário", route: "DELETE /usuarios/{id}" },
];

const companyMethods = [
  { method: "index()", description: "Lista todas as empresas", route: "GET /empresas" },
  { method: "create()", description: "Formulário de nova empresa", route: "GET /empresas/criar" },
  { method: "store()", description: "Salva nova empresa", route: "POST /empresas" },
  { method: "edit()", description: "Formulário de edição", route: "GET /empresas/{id}/editar" },
  { method: "update()", description: "Atualiza empresa", route: "PUT /empresas/{id}" },
];

const departmentMethods = [
  { method: "index()", description: "Lista todos os departamentos", route: "GET /departamentos" },
  { method: "create()", description: "Formulário de novo departamento", route: "GET /departamentos/criar" },
  { method: "store()", description: "Salva novo departamento", route: "POST /departamentos" },
  { method: "edit()", description: "Formulário de edição", route: "GET /departamentos/{id}/editar" },
  { method: "update()", description: "Atualiza departamento", route: "PUT /departamentos/{id}" },
];

const permissionTypes = [
  { name: "view", description: "Visualizar dados", icon: "👁️" },
  { name: "create", description: "Criar novos registros", icon: "➕" },
  { name: "edit", description: "Editar registros existentes", icon: "✏️" },
  { name: "delete", description: "Excluir registros", icon: "🗑️" },
  { name: "approve", description: "Aprovar solicitações", icon: "✅" },
  { name: "admin", description: "Acesso administrativo total", icon: "👑" },
];

export default function Cadastros() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">8</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            CADASTROS
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Cadastros</span>
          <span className="text-muted-foreground font-normal"> e Permissões</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O módulo de Cadastros gerencia as entidades fundamentais do sistema: usuários, empresas, 
          departamentos e permissões de acesso. É a base para todo o controle de acesso e 
          organização hierárquica do Grupo Roma.
        </p>
      </div>

      {/* Controllers */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">8.0</div>
          <h2 className="text-xl font-bold">Controllers Principais</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">UserController</p>
                  <p className="text-xs text-muted-foreground">Gestão de usuários</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">CompanyController</p>
                  <p className="text-xs text-muted-foreground">Gestão de empresas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <FolderTree className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">DepartmentController</p>
                  <p className="text-xs text-muted-foreground">Gestão de departamentos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usuários */}
      <section id="usuarios" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">8.1</div>
          <h2 className="text-xl font-bold">Gestão de Usuários</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">UserController</code> gerencia 
          o cadastro e manutenção de usuários do sistema, incluindo vinculação com empresas e departamentos.
        </p>

        {/* Campos do Usuário */}
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              Campos do Cadastro de Usuário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">name</code>
                  <span className="text-xs text-muted-foreground">Nome completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">email</code>
                  <span className="text-xs text-muted-foreground">E-mail corporativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">cpf</code>
                  <span className="text-xs text-muted-foreground">CPF (usado no login)</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">password</code>
                  <span className="text-xs text-muted-foreground">Senha criptografada</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">company_id</code>
                  <span className="text-xs text-muted-foreground">Empresa vinculada</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">department_id</code>
                  <span className="text-xs text-muted-foreground">Departamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">role</code>
                  <span className="text-xs text-muted-foreground">Papel no sistema</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded font-mono text-primary">active</code>
                  <span className="text-xs text-muted-foreground">Status ativo/inativo</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do UserController</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Método</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Descrição</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Rota</th>
                  </tr>
                </thead>
                <tbody>
                  {userMethods.map((m) => (
                    <tr key={m.method} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-2 text-primary font-mono text-xs">{m.method}</td>
                      <td className="py-2 text-muted-foreground text-xs">{m.description}</td>
                      <td className="py-2 font-mono text-xs">{m.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Empresas */}
      <section id="empresas" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">8.2</div>
          <h2 className="text-xl font-bold">Gestão de Empresas</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">CompanyController</code> gerencia 
          as empresas (concessionárias) do Grupo Roma.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do CompanyController</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Método</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Descrição</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Rota</th>
                  </tr>
                </thead>
                <tbody>
                  {companyMethods.map((m) => (
                    <tr key={m.method} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-2 text-primary font-mono text-xs">{m.method}</td>
                      <td className="py-2 text-muted-foreground text-xs">{m.description}</td>
                      <td className="py-2 font-mono text-xs">{m.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Departamentos */}
      <section id="departamentos" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">8.3</div>
          <h2 className="text-xl font-bold">Gestão de Departamentos</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">DepartmentController</code> gerencia 
          os departamentos dentro de cada empresa.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do DepartmentController</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Método</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Descrição</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Rota</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentMethods.map((m) => (
                    <tr key={m.method} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                      <td className="py-2 text-primary font-mono text-xs">{m.method}</td>
                      <td className="py-2 text-muted-foreground text-xs">{m.description}</td>
                      <td className="py-2 font-mono text-xs">{m.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Permissões */}
      <section id="permissoes" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">8.4</div>
          <h2 className="text-xl font-bold">Sistema de Permissões</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O sistema utiliza um modelo de permissões granular, onde cada usuário pode ter diferentes 
          níveis de acesso para cada módulo do sistema.
        </p>

        {/* Tipos de Permissão */}
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Tipos de Permissão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {permissionTypes.map((perm) => (
                <div key={perm.name} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <span className="text-xl">{perm.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-primary">{perm.name}</p>
                    <p className="text-xs text-muted-foreground">{perm.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Middleware */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" />
              Middleware de Autenticação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              O sistema utiliza o middleware <code className="text-primary font-mono">userIsAuthenticate</code> para 
              verificar se o usuário está autenticado e possui as permissões necessárias para acessar cada rota.
            </p>
            
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4">
                <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`// Aplicação do middleware no Controller
public static function middleware(): array
{
    return ['userIsAuthenticate'];
}

// Verificação de permissão específica
if (!auth()->user()->hasPermission('comercial.comissao.view')) {
    abort(403, 'Acesso negado');
}`}
                </pre>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
