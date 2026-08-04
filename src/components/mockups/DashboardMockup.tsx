const bars = [38, 62, 45, 80, 54, 70, 48];
const rows = [
  { label: "Loja Centro", value: "R$ 12.480", change: "+6%" },
  { label: "Loja Norte", value: "R$ 9.310", change: "+2%" },
  { label: "Loja Sul", value: "R$ 7.905", change: "-1%" },
];

export function DashboardMockup() {
  return (
    <div className="grid grid-cols-[minmax(0,120px)_1fr] text-[11px]">
      <div className="border-r border-border p-4">
        <div className="mb-6 h-2 w-16 rounded-xs bg-fg/70" />
        <div className="space-y-3">
          {["Dashboard", "Lojas", "Equipe", "Promoções", "Relatórios"].map((label, i) => (
            <div
              key={label}
              className={`h-2 rounded-xs ${i === 0 ? "bg-accent" : "bg-border-strong"}`}
              style={{ width: `${60 + (label.length % 3) * 10}%` }}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-24 rounded-xs bg-fg/80" />
          <div className="h-6 w-20 rounded-xs border border-border-strong" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {["Vendas do dia", "Ticket médio", "Conversão"].map((label) => (
            <div key={label} className="rounded-sm border border-border p-3">
              <div className="h-1.5 w-3/4 rounded-xs bg-border-strong" />
              <div className="mt-3 h-3 w-1/2 rounded-xs bg-fg/70" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex h-24 items-end gap-2 rounded-sm border border-border p-3">
          {bars.map((height, i) => (
            <div
              key={i}
              className={`w-full rounded-t-xs ${i === 3 ? "bg-accent" : "bg-border-strong"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="mt-5 space-y-2 rounded-sm border border-border p-3">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-fg-muted">{row.label}</span>
              <span className="text-fg">{row.value}</span>
              <span className={row.change.startsWith("-") ? "text-fg-subtle" : "text-accent"}>
                {row.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
