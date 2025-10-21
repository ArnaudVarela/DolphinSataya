/* eslint-disable @next/next/no-img-element */
export default function Header(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/brand/dolphin-sataya-logo-small.png"
            alt="Dolphin Sataya — logo"
            className="h-8 w-auto"
            loading="eager"
          />
          <span className="font-semibold tracking-wide text-[#0B3A5B]">Dolphin Sataya</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {['Expérience','Le Bateau','Dates & Prix','Itinéraire','FAQ','Éthique','Blog'].map((l)=>( 
            <a key={l} className="text-sm text-[#0B3A5B]/80 hover:text-[#0B3A5B]" href="#">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm">FR ▾</button>
          <a href="#dates" className="rounded-md bg-[#14B7B8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#119da0]">
            Voir les dates
          </a>
        </div>
      </div>
    </header>
  );
}
