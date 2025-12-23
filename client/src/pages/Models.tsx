import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  User,
  Building,
  Truck,
  Link,
  Key,
  Table
} from "lucide-react";

const mainModels = [
  {
    name: "User",
    table: "users",
    description: "Usuários do sistema com autenticação e permissões",
    fields: ["id", "name", "email", "cpf", "company_id", "department_id", "role", "active"],
    relationships: ["belongsTo: Company", "belongsTo: Department", "hasMany: Permissions"]
  },
  {
    name: "Company",
    table: "companies",
    description: "Empresas do Grupo Roma (concessionárias)",
    fields: ["id", "name", "cnpj", "regional_id", "code_dealernet", "active"],
    relationships: ["belongsTo: Regional", "hasMany: Users", "hasMany: Departments"]
  },
  {
    name: "Department",
    table: "departments",
    description: "Departamentos dentro de cada empresa",
    fields: ["id", "name", "company_id", "manager_id", "active"],
    relationships: ["belongsTo: Company", "belongsTo: User (manager)", "hasMany: Users"]
  },
];

const logisticsModels = [
  {
    name: "LogisticsDeliverySchedule",
    table: "logistics_delivery_schedules",
    description: "Agendamentos de entrega de veículos",
    fields: ["id", "chassi", "order_number", "customer_name", "delivery_date", "status", "company_id"],
    relationships: ["belongsTo: Company", "hasMany: Accessories"]
  },
  {
    name: "LogisticsRomaneio",
    table: "logistics_romaneios",
    description: "Romaneios de transporte de veículos",
    fields: ["id", "origin_company_id", "driver_name", "truck_plate", "created_by"],
    relationships: ["belongsTo: Company (origin)", "hasMany: Schedules"]
  },
  {
    name: "LogisticsAccessories",
    table: "logistics_accessories",
    description: "Acessórios para veículos",
    fields: ["id", "name", "description", "active"],
    relationships: ["belongsToMany: DeliverySchedule"]
  },
];

const commercialModels = [
  {
    name: "AutomakerPaidVehicle",
    table: "automaker_paid_vehicles",
    description: "Veículos pagos pela montadora (arquivo B2B)",
    fields: ["id", "chassi", "commission_value", "income_tax", "imported_at"],
    relationships: []
  },
  {
    name: "PercentageDirectSalesCommission",
    table: "percentage_direct_sales_commissions",
    description: "Percentuais de comissão para vendas diretas",
    fields: ["id", "seller_code", "percentage", "period"],
    relationships: []
  },
];

export default function Models() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number">7</div>
          <Badge variant="outline" className="tech-badge bg-primary/10 text-primary border-primary/30">
            MODELS
          </Badge>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          <span className="gradient-text">Models</span>
          <span className="text-muted-foreground font-normal"> Eloquent ORM</span>
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Os Models do Laravel representam as tabelas do banco de dados e encapsulam a lógica de 
          acesso aos dados. O Intratech utiliza o Eloquent ORM para gerenciar mais de 40 models.
        </p>
      </div>

      {/* Visão Geral */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">7.0</div>
          <h2 className="text-xl font-bold">Visão Geral</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Database className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">40+</p>
              <p className="text-xs text-muted-foreground">Models</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Table className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground">Conexões de Banco</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-4 text-center">
              <Link className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-xs text-muted-foreground">Relacionamentos</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Models Principais */}
      <section id="user" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">7.1</div>
          <h2 className="text-xl font-bold">Models Principais</h2>
        </div>
        
        <div className="space-y-4">
          {mainModels.map((model) => (
            <Card key={model.name} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {model.name === "User" ? <User className="w-5 h-5 text-primary" /> : <Building className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <span className="text-primary font-mono">{model.name}</span>
                    <p className="text-xs text-muted-foreground font-normal mt-1">{model.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Key className="w-3 h-3" /> Campos Principais
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {model.fields.map((field) => (
                        <code key={field} className="text-xs bg-muted px-2 py-0.5 rounded font-mono">
                          {field}
                        </code>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Link className="w-3 h-3" /> Relacionamentos
                    </h4>
                    <div className="space-y-1">
                      {model.relationships.map((rel) => (
                        <p key={rel} className="text-xs text-muted-foreground font-mono">
                          {rel}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <code className="text-xs text-primary font-mono">Tabela: {model.table}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Models de Logística */}
      <section id="logistics" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">7.2</div>
          <h2 className="text-xl font-bold">Models de Logística</h2>
        </div>
        
        <div className="space-y-4">
          {logisticsModels.map((model) => (
            <Card key={model.name} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-mono">{model.name}</span>
                    <p className="text-xs text-muted-foreground font-normal mt-1">{model.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Key className="w-3 h-3" /> Campos Principais
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {model.fields.map((field) => (
                        <code key={field} className="text-xs bg-muted px-2 py-0.5 rounded font-mono">
                          {field}
                        </code>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Link className="w-3 h-3" /> Relacionamentos
                    </h4>
                    <div className="space-y-1">
                      {model.relationships.length > 0 ? model.relationships.map((rel) => (
                        <p key={rel} className="text-xs text-muted-foreground font-mono">
                          {rel}
                        </p>
                      )) : <p className="text-xs text-muted-foreground">Nenhum</p>}
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <code className="text-xs text-primary font-mono">Tabela: {model.table}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Models Comerciais */}
      <section id="company" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">7.3</div>
          <h2 className="text-xl font-bold">Models Comerciais</h2>
        </div>
        
        <div className="space-y-4">
          {commercialModels.map((model) => (
            <Card key={model.name} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-mono">{model.name}</span>
                    <p className="text-xs text-muted-foreground font-normal mt-1">{model.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                    <Key className="w-3 h-3" /> Campos Principais
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {model.fields.map((field) => (
                      <code key={field} className="text-xs bg-muted px-2 py-0.5 rounded font-mono">
                        {field}
                      </code>
                    ))}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <code className="text-xs text-primary font-mono">Tabela: {model.table}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exemplo de Model */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="section-number-outline text-sm">7.4</div>
          <h2 className="text-xl font-bold">Exemplo de Model</h2>
        </div>
        
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <pre className="text-sm font-mono text-emerald-400 overflow-x-auto">
{`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;
use Illuminate\\Database\\Eloquent\\Relations\\HasMany;

class User extends Model
{
    protected $fillable = [
        'name',
        'email',
        'cpf',
        'company_id',
        'department_id',
        'role',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    // Relacionamentos
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function permissions(): HasMany
    {
        return $this->hasMany(UserPermission::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
