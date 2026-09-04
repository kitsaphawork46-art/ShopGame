export function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
