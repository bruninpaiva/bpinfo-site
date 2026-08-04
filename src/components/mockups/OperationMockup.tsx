const stores = [
  { name: "Loja Centro", status: "Aberta", team: 4 },
  { name: "Loja Norte", status: "Aberta", team: 3 },
  { name: "Loja Sul", status: "Pausa", team: 2 },
];

const sellers = [
  { name: "Vendedora 1", state: "Em atendimento" },
  { name: "Vendedora 2", state: "Disponível" },
  { name: "Vendedora 3", state: "Pausa" },
  { name: "Vendedora 4", state: "Disponível" },
];

export function OperationMockup() {
  return (
    <div className="grid gap-px bg-border p-5 text-[11px] md:grid-cols-2">
      <div className="bg-bg-elevated p-4">
        <p className="text-fg-subtle uppercase tracking-wide">Lojas</p>
        <div className="mt-4 space-y-3">
          {stores.map((store) => (
            <div key={store.name} className="flex items-center justify-between">
              <span className="text-fg">{store.name}</span>
              <span className="text-fg-muted">{store.team} pessoas</span>
              <span
                className={
                  store.status === "Pausa" ? "text-fg-subtle" : "text-accent"
                }
              >
                {store.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-bg-elevated p-4">
        <p className="text-fg-subtle uppercase tracking-wide">Equipe</p>
        <div className="mt-4 space-y-3">
          {sellers.map((seller) => (
            <div key={seller.name} className="flex items-center justify-between">
              <span className="text-fg">{seller.name}</span>
              <span
                className={
                  seller.state === "Pausa" ? "text-fg-subtle" : "text-fg-muted"
                }
              >
                {seller.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
