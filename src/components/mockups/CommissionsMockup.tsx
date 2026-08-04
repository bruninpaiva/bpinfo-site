const commissions = [
  { name: "Vendedora 1", sales: "R$ 8.240", rate: "3,5%", total: "R$ 288,40" },
  { name: "Vendedora 2", sales: "R$ 6.110", rate: "3,0%", total: "R$ 183,30" },
  { name: "Vendedora 3", sales: "R$ 5.480", rate: "3,0%", total: "R$ 164,40" },
  { name: "Vendedora 4", sales: "R$ 4.920", rate: "2,5%", total: "R$ 123,00" },
];

export function CommissionsMockup() {
  return (
    <div className="p-5 text-[11px]">
      <div className="grid grid-cols-4 gap-2 border-b border-border pb-3 text-fg-subtle uppercase tracking-wide">
        <span>Vendedora</span>
        <span>Vendas</span>
        <span>Taxa</span>
        <span>Comissão</span>
      </div>
      <div className="divide-y divide-border">
        {commissions.map((row) => (
          <div key={row.name} className="grid grid-cols-4 gap-2 py-3">
            <span className="text-fg">{row.name}</span>
            <span className="text-fg-muted">{row.sales}</span>
            <span className="text-fg-muted">{row.rate}</span>
            <span className="text-accent">{row.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
