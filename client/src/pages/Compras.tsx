import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  ArrowRight,
  ClipboardList,
  Users,
  BarChart3
} from "lucide-react";

const purchaseFlow = [
  { step: "1", title: "Requisição", description: "Solicitante cria" },
  { step: "2", title: "Aprovação", description: "Gestor aprova" },
  { step: "3", title: "Cotação", description: "Compras cota" },
  { step: "4", title: "Seleção", description: "Escolhe fornecedor" },
  { step: "5", title: "Pedido", description: "Gera pedido" },
];

const requisitionStatus = [
  { code: "pendente", name: "Pendente", description: "Aguardando aprovação do gestor", icon: <Clock className="w-4 h-4" />, color: "text-amber-500" },
  { code: "aprovado", name: "Aprovado", description: "Aprovado, aguardando cotação", icon: <CheckCircle className="w-4 h-4" />, color: "text-emerald-500" },
  { code: "em_cotacao", name: "Em Cotação", description: "Compras está cotando", icon: <BarChart3 className="w-4 h-4" />, color: "text-blue-500" },
  { code: "finalizado", name: "Finalizado", description: "Pedido realizado", icon: <CheckCircle className="w-4 h-4" />, color: "text-emerald-500" },
  { code: "reprovado", name: "Reprovado", description: "Requisição negada", icon: <XCircle className="w-4 h-4" />, color: "text-red-500" },
];

const purchasingMethods = [
  { method: "listRequisitions()", description: "Lista requisições de compra", route: "GET /compras/requisicoes" },
  { method: "createRequisition()", description: "Formulário de nova requisição", route: "GET /compras/requisicoes/criar" },
  { method: "storeRequisition()", description: "Salva nova requisição", route: "POST /compras/requisicoes" },
  { method: "approveRequisition()", description: "Aprova uma requisição", route: "POST /compras/requisicoes/aprovar" },
  { method: "rejectRequisition()", description: "Reprova uma requisição", route: "POST /compras/requisicoes/reprovar" },
];

const quotationMethods = [
  { method: "quotationMap()", description: "Mapa de cotação", route: "GET /compras/mapa-cotacao" },
  { method: "addQuotation()", description: "Adiciona cotação de fornecedor", route: "POST /compras/cotacao" },
  { method: "selectSupplier()", description: "Seleciona fornecedor vencedor", route: "POST /compras/selecionar-fornecedor" },
  { method: "generateOrder()", description: "Gera pedido de compra", route: "POST /compras/gerar-pedido" },
];

export default function Compras() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">5</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            MÓDULO COMPRAS
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Compras</span>
          <span className="text-muted-foreground font-normal"> Requisições e Cotações</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O Módulo de Compras gerencia todo o fluxo de aquisição de materiais e serviços, desde a 
          requisição inicial até a geração do pedido de compra, passando por aprovações e cotações.
        </p>
      </div>

      {/* Controller */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.0</div>
          <h2 className="text-xl font-bold">Controller Principal</h2>
        </div>
        
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">PurchasingController</p>
                <p className="text-sm text-muted-foreground">
                  Gerencia requisições de compra, aprovações, cotações e geração de pedidos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Fluxo Geral */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.1</div>
          <h2 className="text-xl font-bold">Fluxo de Compras</h2>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm">Fluxo Completo de uma Requisição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {purchaseFlow.map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors min-w-[100px]">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < purchaseFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Requisições */}
      <section id="requisicoes" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.2</div>
          <h2 className="text-xl font-bold">Requisições de Compra</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          A requisição é o ponto de partida do processo de compras. Qualquer colaborador pode criar 
          uma requisição para solicitar materiais ou serviços.
        </p>

        {/* Status */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-sm">Status da Requisição</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requisitionStatus.map((status) => (
              <Card key={status.code} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={status.color}>{status.icon}</span>
                    <span className="font-semibold text-sm">{status.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{status.description}</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{status.code}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-primary" />
              Métodos de Requisição
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
                  {purchasingMethods.map((m) => (
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

      {/* Aprovações */}
      <section id="aprovacoes" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.3</div>
          <h2 className="text-xl font-bold">Fluxo de Aprovação</h2>
        </div>
        
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Níveis de Aprovação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              O sistema possui um fluxo de aprovação baseado em alçadas de valor e hierarquia organizacional.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <p className="font-semibold text-sm">Gestor Imediato</p>
                  <p className="text-xs text-muted-foreground">Aprova requisições até um determinado valor.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <p className="font-semibold text-sm">Gerente de Área</p>
                  <p className="text-xs text-muted-foreground">Aprova requisições de valores intermediários.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <p className="font-semibold text-sm">Diretoria</p>
                  <p className="text-xs text-muted-foreground">Aprova requisições de alto valor ou estratégicas.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mapa de Cotação */}
      <section id="cotacao" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.4</div>
          <h2 className="text-xl font-bold">Mapa de Cotação</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Após a aprovação, a requisição segue para o setor de Compras, que realiza a cotação com 
          diferentes fornecedores.
        </p>

        {/* Funcionalidades */}
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Funcionalidades do Mapa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Cadastro de múltiplos fornecedores por item
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Comparativo de preços e condições
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Registro de prazo de entrega
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Seleção do fornecedor vencedor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Justificativa para escolha
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Geração automática do pedido
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos de Cotação</CardTitle>
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
                  {quotationMethods.map((m) => (
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

      {/* Código Exemplo */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">5.5</div>
          <h2 className="text-xl font-bold">Exemplo de Código</h2>
        </div>
        
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`// Criação de uma requisição de compra
public function storeRequisition(Request $request)
{
    $requisition = PurchaseRequisition::create([
        'user_id' => auth()->id(),
        'department_id' => $request->department_id,
        'description' => $request->description,
        'justification' => $request->justification,
        'status' => 'pendente',
        'total_estimated' => $request->total_estimated,
    ]);

    // Adiciona os itens da requisição
    foreach ($request->items as $item) {
        $requisition->items()->create($item);
    }

    // Notifica o aprovador
    $this->notifyApprover($requisition);

    return redirect()->route('compras.requisicoes')
        ->with('success', 'Requisição criada com sucesso!');
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
