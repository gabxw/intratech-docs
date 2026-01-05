import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Calculator,
  FileText,
  DollarSign,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

const commissionFlow = [
  { step: "1", title: "Filtros", description: "Período e regionais" },
  { step: "2", title: "Busca Vendas", description: "Consulta DealerNet" },
  { step: "3", title: "Chassis Importados", description: "Arquivo B2B" },
  { step: "4", title: "Merge", description: "Unifica dados" },
  { step: "5", title: "Cálculo", description: "Aplica regras" },
  { step: "6", title: "Relatório", description: "Exibe resultados" },
];

const stockTypes = [
  { code: "VD", name: "Venda Direta", description: "Veículos vendidos diretamente pela montadora" },
  { code: "VN", name: "Veículos Novos", description: "Veículos novos em estoque da concessionária" },
  { code: "VU", name: "Veículos Usados", description: "Veículos usados/seminovos" },
];

const commissionMethods = [
  { method: "commissionReport()", description: "Gera relatório completo de comissões", route: "POST /comissao" },
  { method: "sellerCommissionReport()", description: "Relatório de comissão por vendedor", route: "POST /comissao/vendedor" },
  { method: "getSellerData()", description: "Busca dados do vendedor no DealerNet", route: "interno" },
  { method: "getAdditionalService()", description: "Calcula serviços adicionais", route: "interno" },
  { method: "getBonusGrupoRoma()", description: "Calcula bônus do Grupo Roma", route: "interno" },
];

const invoicingMethods = [
  { method: "uploadFileB2B()", description: "Formulário de upload", route: "GET /faturamento/upload-arquivo-b2b" },
  { method: "processFileB2B()", description: "Processa arquivo CSV de comissões", route: "POST /faturamento/upload-arquivo-b2b" },
  { method: "paidVehicleRegistration()", description: "Formulário de cadastro manual", route: "GET /faturamento/cadastro-veiculos-pagos" },
  { method: "storePaidVehicleRegistration()", description: "Registra veículo pago", route: "POST /faturamento/cadastro-veiculos-pagos" },
];

export default function Comercial() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">3</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            MÓDULO COMERCIAL
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Comercial</span>
          <span className="text-muted-foreground font-normal"> Vendas e Comissões</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O Módulo Comercial é o coração das operações de vendas do sistema Intratech. Ele gerencia 
          todo o ciclo de comissionamento dos vendedores, processa relatórios de vendas e controla 
          o faturamento de veículos.
        </p>
      </div>

      {/* Controllers */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">3.0</div>
          <h2 className="text-xl font-bold">Controllers Principais</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "CommissionController", desc: "Cálculo e relatórios de comissões", icon: <Calculator className="w-5 h-5" /> },
            { name: "InvoicingController", desc: "Faturamento e upload de arquivos B2B", icon: <FileText className="w-5 h-5" /> },
            { name: "FinancialController", desc: "Relatórios financeiros e Trade-In", icon: <DollarSign className="w-5 h-5" /> },
            { name: "PercentageDirectSalesCommissionController", desc: "Percentuais de comissão VD", icon: <BarChart3 className="w-5 h-5" /> },
          ].map((controller) => (
            <Card key={controller.name} className="card-hover">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {controller.icon}
                </div>
                <div>
                  <p className="font-bold text-sm">{controller.name}</p>
                  <p className="text-xs text-muted-foreground">{controller.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comissões */}
      <section id="comissoes" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">3.1</div>
          <h2 className="text-xl font-bold">Cálculo de Comissões</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">CommissionController</code> é 
          um dos componentes mais críticos e complexos do sistema, com mais de 1500 linhas de código. 
          Ele calcula as comissões dos vendedores com base em regras de negócio e dados do DealerNet.
        </p>

        {/* Fluxo */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm">Fluxo Principal do Relatório</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {commissionFlow.map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors min-w-[90px]">
                    <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold text-xs">
                      {item.step}
                    </div>
                    <p className="font-semibold text-xs">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < commissionFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Estoque */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-sm">Tipos de Estoque</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {stockTypes.map((type) => (
              <Card key={type.code} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono font-bold text-xl text-primary">{type.code}</span>
                    <span className="text-sm font-medium">{type.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do CommissionController</CardTitle>
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
                  {commissionMethods.map((m) => (
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
        <div className="mt-6">
          <p className="text-sm text-muted-foreground mb-3 font-mono">// Separação por tipo de estoque</p>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`// Separação por tipo de estoque
$VD = collect($allSellsAndReturned)
    ->filter(fn ($sell) => $sell->estoque == 'VD')
    ->map(fn ($sell) => $sell->chassi);

$VN = collect($allSellsAndReturned)
    ->filter(fn ($sell) => in_array($sell->estoque, ['VN', 'VU', 'VI', 'VM']))
    ->map(fn ($sell) => $sell->chassi);`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faturamento */}
      <section id="faturamento" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">3.2</div>
          <h2 className="text-xl font-bold">Faturamento</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">InvoicingController</code> gerencia 
          as rotinas de faturamento, principalmente aquelas que dependem de informações externas, 
          como os arquivos B2B da montadora.
        </p>

        {/* Upload B2B */}
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Upload de Arquivo B2B
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Usuário envia arquivo CSV (separado por ponto e vírgula)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Sistema extrai série do chassi, valor da comissão e imposto de renda
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Busca chassi completo no DealerNet e verifica duplicidade
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Cria registro na tabela <code className="text-primary font-mono">automaker_paid_vehicles</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do InvoicingController</CardTitle>
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
                  {invoicingMethods.map((m) => (
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

      {/* Financeiro */}
      <section id="financeiro" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">3.3</div>
          <h2 className="text-xl font-bold">Financeiro</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono text-sm">FinancialController</code> é 
          focado em relatórios financeiros específicos, como o de veículos Trade-In.
        </p>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Relatório de Veículos Trade-In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Este relatório consolida informações de um veículo vendido que teve um veículo usado 
              como parte do pagamento.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Dados da Venda</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Cliente, modelo, valor</li>
                  <li>• Dias em estoque</li>
                  <li>• Valores agregados</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Dados do Trade-In</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Nota fiscal de compra</li>
                  <li>• Chassi e placa do usado</li>
                  <li>• Custos de preparação</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Regras de Negócio */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">3.4</div>
          <h2 className="text-xl font-bold">Regras de Negócio</h2>
        </div>
        
        <div className="grid gap-4">
          <Card className="card-hover">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Base de Cálculo</h3>
                <p className="text-xs text-muted-foreground">
                  A comissão é calculada sobre o valor da Nota Fiscal, acrescido de serviços e bônus, 
                  e descontado o imposto de renda (1.5%).
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Venda Direta (VD)</h3>
                <p className="text-xs text-muted-foreground">
                  A comissão de VD pode ter um percentual fixo cadastrado ou o percentual da proposta.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Devoluções</h3>
                <p className="text-xs text-muted-foreground">
                  Se a última movimentação do veículo no período for uma devolução, a comissão é estornada.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
