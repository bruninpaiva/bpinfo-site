const cards = [
  { name: "Vendedora 1", value: "R$ 288,40", tag: "Comissão" },
  { name: "Vendedora 2", value: "R$ 183,30", tag: "Comissão" },
  { name: "Loja Sul", value: "Pausa", tag: "Status" },
];

export function MobileMockup() {
  return (
    <div className="flex justify-center p-5">
      <div className="w-44 rounded-lg border border-border-strong bg-bg-elevated p-2.5">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-border-strong" />
        <div className="h-2 w-16 rounded-xs bg-fg/80" />
        <div className="mt-4 space-y-2.5">
          {cards.map((card) => (
            <div key={card.name} className="rounded-sm border border-border p-2.5 text-[10px]">
              <p className="text-fg-subtle">{card.tag}</p>
              <p className="mt-1 text-fg">{card.name}</p>
              <p className="mt-1 text-accent">{card.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={`h-6 rounded-xs ${i === 0 ? "bg-accent" : "bg-surface-strong"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
