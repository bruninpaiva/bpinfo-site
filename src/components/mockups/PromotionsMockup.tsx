const promotions = [
  { name: "Verão — linha calçados", period: "01/08 a 15/08", status: "Ativa" },
  { name: "Segunda peça com desconto", period: "10/08 a 31/08", status: "Ativa" },
  { name: "Liquidação de inverno", period: "encerrada em 30/07", status: "Encerrada" },
];

export function PromotionsMockup() {
  return (
    <div className="p-5 text-[11px]">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-28 rounded-xs bg-fg/80" />
        <div className="h-6 w-24 rounded-xs bg-accent" />
      </div>
      <div className="mt-5 space-y-3">
        {promotions.map((promo) => (
          <div
            key={promo.name}
            className="flex items-center justify-between border border-border p-3"
          >
            <div>
              <p className="text-fg">{promo.name}</p>
              <p className="mt-1 text-fg-subtle">{promo.period}</p>
            </div>
            <span
              className={
                promo.status === "Ativa"
                  ? "border border-accent px-2 py-1 text-accent"
                  : "border border-border-strong px-2 py-1 text-fg-subtle"
              }
            >
              {promo.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
