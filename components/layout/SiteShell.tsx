import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { SearchModal } from "@/components/ui/SearchModal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main>{children}</main><Footer /><SearchModal /><CartDrawer /></>;
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-top"><div className="container-page"><p className="section-kicker">{eyebrow}</p><h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p></div></section>;
}
