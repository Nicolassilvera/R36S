const stats = [
  { num: "3.5”", label: "Pantalla IPS HD" },
  { num: "3500", small: "mAh", label: "Batería" },
  { num: "15+", label: "Sistemas emulados" },
  { num: "Hoy", label: "Retiro en Caballito" },
];

export function StatsBar() {
  return (
    <div className="flex flex-wrap justify-center bg-panel border-y border-border">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex-1 min-w-[160px] px-6 py-8 text-center border-border md:border-r last:border-r-0 border-b md:border-b-0"
        >
          <span className="font-display text-[2.8rem] text-accent leading-none">
            {s.num}
            {s.small && <small className="text-xl ml-1">{s.small}</small>}
          </span>
          <span className="block mt-2 text-[0.72rem] tracking-[2px] uppercase text-muted">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
