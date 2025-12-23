import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Calendar,
  FileText,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  XCircle,
  Package
} from "lucide-react";

const deliveryFlow = [
  { step: "1", title: "Criação", description: "Agendamento criado" },
  { step: "2", title: "Pendente", description: "Aguardando entrega" },
  { step: "3", title: "Confirmação", description: "Entrega realizada" },
  { step: "4", title: "Finalizado", description: "Status confirmado" },
];

const deliveryStatus = [
  { code: "pendente_entrega", name: "Pendente Entrega", description: "Agendamento criado, aguardando data", icon: <Clock className="w-4 h-4" />, color: "text-amber-500" },
  { code: "pendente_confirmacao", name: "Pendente Confirmação", description: "Data passou, aguardando confirmação", icon: <Clock className="w-4 h-4" />, color: "text-blue-500" },
  { code: "confirmado", name: "Confirmado", description: "Entrega realizada e confirmada", icon: <CheckCircle className="w-4 h-4" />, color: "text-emerald-500" },
  { code: "cancelado", name: "Cancelado", description: "Agendamento foi cancelado", icon: <XCircle className="w-4 h-4" />, color: "text-red-500" },
];

const logisticsMethods = [
  { method: "listScheduling()", description: "Lista todos os agendamentos", route: "GET /logistica/listar-agendamento" },
  { method: "registerScheduling()", description: "Formulário de novo agendamento", route: "GET /logistica/cadastrar-agendamento" },
  { method: "storeScheduling()", description: "Salva novo agendamento", route: "POST /logistica/cadastrar-agendamento" },
  { method: "confirmScheduling()", description: "Confirma entrega realizada", route: "POST /logistica/confirmar-agendamento" },
  { method: "cancelScheduling()", description: "Cancela um agendamento", route: "POST /logistica/cancelar-agendamento" },
];

const romaneioMethods = [
  { method: "romaneio()", description: "Lista romaneios", route: "GET /logistica/romaneio" },
  { method: "storeRomaneio()", description: "Cria novo romaneio", route: "POST /logistica/romaneio" },
  { method: "gerarPdfRomaneio()", description: "Gera PDF do romaneio", route: "GET /logistica/romaneio/pdf/{id}" },
  { method: "cancelRomaneio()", description: "Cancela romaneio", route: "POST /logistica/romaneio/cancelar" },
];

export default function Logistica() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">4</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            MÓDULO LOGÍSTICA
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Logística</span>
          <span className="text-muted-foreground font-normal"> Entregas e Romaneios</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          O Módulo de Logística é responsável por gerenciar todo o ciclo de vida do veículo desde a sua 
          chegada na concessionária até a entrega final ao cliente. Ele também coordena a movimentação 
          de veículos entre as unidades do Grupo Roma.
        </p>
      </div>

      {/* Controllers */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">4.0</div>
          <h2 className="text-xl font-bold">Controller Principal</h2>
        </div>
        
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">LogisticsController</p>
                <p className="text-sm text-muted-foreground">
                  Gerencia agendamentos, romaneios, controle de pátio, armazém e cadastros auxiliares.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Agendamentos */}
      <section id="agendamentos" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">4.1</div>
          <h2 className="text-xl font-bold">Agendamento de Entregas</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Esta é a funcionalidade central do módulo, permitindo o agendamento e controle de todas as 
          entregas de veículos novos e a retirada de veículos usados.
        </p>

        {/* Fluxo */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Fluxo de Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {deliveryFlow.map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors min-w-[100px]">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < deliveryFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-sm">Status do Agendamento (Enum StatusDeliverySchedule)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {deliveryStatus.map((status) => (
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
            <CardTitle className="text-sm">Métodos de Agendamento</CardTitle>
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
                  {logisticsMethods.map((m) => (
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

        {/* Controle de Vagas */}
        <Card className="mt-6 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Controle de Vagas</h3>
                <p className="text-sm text-muted-foreground">
                  O sistema permite configurar o número de vagas de entrega disponíveis por dia para cada 
                  empresa (<code className="text-primary font-mono">LogisticsDeliveryVacanciesCompany</code>). 
                  Ao criar um novo agendamento, o sistema verifica a disponibilidade de vagas para a data 
                  e empresa selecionadas, evitando sobrecarga na equipe de entrega.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Romaneio */}
      <section id="romaneio" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">4.2</div>
          <h2 className="text-xl font-bold">Romaneio</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          O romaneio é o documento que formaliza o transporte de um ou mais veículos entre as unidades 
          do Grupo Roma.
        </p>

        {/* Fluxo do Romaneio */}
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Fluxo do Romaneio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Criação:</strong> Usuário cria romaneio informando empresa de origem, motorista e placa do caminhão.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Adição de Veículos:</strong> Seleciona agendamentos de entrega que serão transportados juntos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Geração do PDF:</strong> Sistema gera documento PDF com todos os detalhes dos veículos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">4</div>
                <p className="text-sm text-muted-foreground">
                  <strong>Envio de E-mail:</strong> Notificação enviada para os responsáveis da empresa de origem e destino.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métodos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Métodos do Romaneio</CardTitle>
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
                  {romaneioMethods.map((m) => (
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

      {/* Controle de Pátio */}
      <section id="patio" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">4.3</div>
          <h2 className="text-xl font-bold">Controle de Pátio e Armazém</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Estas funcionalidades permitem o controle físico dos veículos no pátio e no armazém da concessionária.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Controle de Pátio */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Controle de Pátio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Rota: <code className="text-primary font-mono">/logistica/controle-patio</code>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Entrada:</strong> Registra chegada do veículo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Saída:</strong> Registra saída do veículo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Relatório:</strong> Histórico de movimentações</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Armazém */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                Armazém de Veículos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Rota: <code className="text-primary font-mono">/logistica/armazem-veiculos</code>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Visualização:</strong> Mapa gráfico do armazém</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Atualização:</strong> Move veículos entre vagas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span><strong>Localização:</strong> Controle de posição atualizado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cadastros Auxiliares */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">4.4</div>
          <h2 className="text-xl font-bold">Cadastros Auxiliares</h2>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Acessórios</h4>
                <p className="text-xs text-muted-foreground">
                  Cadastro de acessórios que podem ser adicionados a um agendamento (tapetes, película, etc.)
                </p>
                <code className="text-xs font-mono mt-2 block">LogisticsAccessories</code>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Marcas</h4>
                <p className="text-xs text-muted-foreground">
                  Cadastro das marcas dos veículos comercializados.
                </p>
                <code className="text-xs font-mono mt-2 block">LogisticsVehicleBrand</code>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-semibold text-sm text-primary mb-2">Modelos</h4>
                <p className="text-xs text-muted-foreground">
                  Cadastro dos modelos de veículos, vinculados às marcas.
                </p>
                <code className="text-xs font-mono mt-2 block">LogisticsVehicleModel</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
