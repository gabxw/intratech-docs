import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileText,
  Calculator,
  PieChart,
  TrendingUp,
  Settings,
  Database
} from "lucide-react";

const dreStructure = [
  { level: 0, name: "Receita Bruta", description: "Total de vendas antes de deduções" },
  { level: 1, name: "(-) Deduções", description: "Impostos sobre vendas, devoluções" },
  { level: 0, name: "= Receita Líquida", description: "Receita após deduções" },
  { level: 1, name: "(-) CPV", description: "Custo dos Produtos Vendidos" },
  { level: 0, name: "= Lucro Bruto", description: "Margem bruta da operação" },
  { level: 1, name: "(-) Despesas Operacionais", description: "Despesas fixas e variáveis" },
  { level: 0, name: "= Resultado Operacional", description: "EBITDA" },
  { level: 1, name: "(+/-) Resultado Financeiro", description: "Receitas e despesas financeiras" },
  { level: 0, name: "= Resultado Líquido", description: "Lucro ou prejuízo final" },
];

const managementMethods = [
  { method: "index()", description: "Dashboard gerencial", route: "GET /gerencial" },
  { method: "show()", description: "DRE de uma empresa", route: "GET /gerencial/{id}" },
  { method: "processManagement()", description: "Processa lançamentos", route: "POST /gerencial/processar" },
  { method: "accountingEntries()", description: "Lista lançamentos contábeis", route: "GET /gerencial/lancamentos" },
  { method: "storeEntry()", description: "Cria novo lançamento", route: "POST /gerencial/lancamentos" },
];

const reportMethods = [
  { method: "vehicleSalesManagement()", description: "Gestão de vendas de veículos", route: "GET /gestao-vendas-veiculos" },
  { method: "vehiclesInStock()", description: "Veículos em estoque", route: "GET /gestao-vendas-veiculos/veiculos-estoque" },
  { method: "paidByAutomaker()", description: "Veículos pagos pela montadora", route: "GET /gestao-vendas-veiculos/pagos-montadora" },
  { method: "titleExpiring()", description: "Títulos vencendo em 30 dias", route: "GET /gestao-vendas-veiculos/vencimento-titulo" },
];

export default function Gerencial() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">6</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            MÓDULO GERENCIAL
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Gerencial</span>
          <span className="text-muted-foreground font-normal"> DRE e Relatórios</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O Módulo Gerencial é o centro de inteligência do sistema, fornecendo relatórios consolidados, 
          DRE (Demonstração do Resultado do Exercício) e ferramentas para análise de performance das 
          empresas do Grupo Roma.
        </p>
      </div>

      {/* Controllers */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">6.0</div>
          <h2 className="text-xl font-bold">Controllers Principais</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">ManagementController</p>
                  <p className="text-sm text-muted-foreground">
                    DRE, lançamentos contábeis e processamentos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">ManagementReportController</p>
                  <p className="text-sm text-muted-foreground">
                    Relatórios de gestão de vendas e estoque.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DRE */}
      <section id="dre" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">6.1</div>
          <h2 className="text-xl font-bold">DRE - Demonstração do Resultado</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          A DRE é o principal relatório contábil do sistema, apresentando a estrutura de receitas, 
          custos e despesas de cada empresa ou da regional consolidada.
        </p>

        {/* Estrutura DRE */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              Estrutura da DRE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dreStructure.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-primary/5 ${item.level === 0 ? 'font-semibold' : 'text-muted-foreground'}`}
                  style={{ paddingLeft: `${item.level * 24 + 8}px` }}
                >
                  <span className={item.level === 0 ? 'text-primary' : ''}>{item.name}</span>
                  <span className="text-xs text-muted-foreground">// {item.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Funcionalidades */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <PieChart className="w-4 h-4 text-primary" />
              Funcionalidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Filtros Avançados</h4>
                <p className="text-xs text-muted-foreground">
                  Permite filtrar por período (mês/ano), empresa e centro de custo.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Visão Detalhada</h4>
                <p className="text-xs text-muted-foreground">
                  Clicando em cada conta contábil, exibe todos os lançamentos que compõem o saldo.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Comparativo</h4>
                <p className="text-xs text-muted-foreground">
                  Comparação com períodos anteriores e análise de variação.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Exportação</h4>
                <p className="text-xs text-muted-foreground">
                  Exporta relatórios em Excel e PDF para análise externa.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lançamentos */}
      <section id="lancamentos" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">6.2</div>
          <h2 className="text-xl font-bold">Lançamentos Contábeis</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O sistema permite o registro de lançamentos contábeis manuais que complementam os dados 
          importados do sistema contábil principal.
        </p>

        {/* Métodos */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm">Métodos do ManagementController</CardTitle>
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
                  {managementMethods.map((m) => (
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

        {/* Código Exemplo */}
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`// Processamento de lançamentos gerenciais
public function processManagement(Request $request)
{
    $period = Carbon::createFromFormat('Y-m', $request->period);
    
    // Busca lançamentos do período
    $entries = ManagementEntry::where('period', $period)
        ->where('company_id', $request->company_id)
        ->get();
    
    // Processa cada lançamento
    foreach ($entries as $entry) {
        $this->processEntry($entry);
    }
    
    // Atualiza status do período
    ManagementPeriod::updateOrCreate(
        ['period' => $period, 'company_id' => $request->company_id],
        ['status' => 'processed', 'processed_at' => now()]
    );
    
    return back()->with('success', 'Período processado!');
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Rateios */}
      <section id="rateios" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">6.3</div>
          <h2 className="text-xl font-bold">Parâmetros de Rateio</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O sistema permite configurar parâmetros de rateio para distribuir custos e despesas 
          compartilhados entre as empresas do grupo.
        </p>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" />
              Tipos de Rateio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Por Faturamento</h4>
                  <p className="text-xs text-muted-foreground">
                    Distribui custos proporcionalmente ao faturamento de cada empresa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Por Headcount</h4>
                  <p className="text-xs text-muted-foreground">
                    Distribui custos proporcionalmente ao número de funcionários.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Percentual Fixo</h4>
                  <p className="text-xs text-muted-foreground">
                    Distribui custos com percentuais fixos definidos manualmente.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Relatórios de Gestão */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">6.4</div>
          <h2 className="text-xl font-bold">Relatórios de Gestão de Vendas</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">ManagementReportController</code> fornece 
          relatórios específicos para acompanhamento de vendas e estoque de veículos.
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Relatórios Disponíveis
            </CardTitle>
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
                  {reportMethods.map((m) => (
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
    </Layout>
  );
}
