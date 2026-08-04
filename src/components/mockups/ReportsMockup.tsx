const points = "0,38 16,30 32,34 48,18 64,24 80,10 100,16";

export function ReportsMockup() {
  return (
    <div className="p-5 text-[11px]">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-28 rounded-xs bg-fg/80" />
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-xs border border-border-strong" />
          <div className="h-5 w-14 rounded-xs border border-border-strong" />
        </div>
      </div>

      <div className="mt-5 border border-border p-3">
        <svg viewBox="0 0 100 40" className="h-24 w-full" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: "Faturamento", value: "R$ 42.100" },
          { label: "Itens vendidos", value: "1.284" },
          { label: "Ticket médio", value: "R$ 96,40" },
        ].map((stat) => (
          <div key={stat.label} className="border border-border p-3">
            <p className="text-fg-subtle">{stat.label}</p>
            <p className="mt-2 text-fg">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
