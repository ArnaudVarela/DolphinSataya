/* eslint-disable @next/next/no-img-element */
export default function BrandBanner(){
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-16 md:flex-row md:gap-10">
        <img
          src="/images/brand/dolphin-sataya-logo-badge.png"
          alt="Emblème Dolphin Sataya — Dream Vacation in Sataya, Egypt"
          className="h-56 w-auto md:h-72"
          loading="lazy"
        />
        <div className="max-w-[60ch]">
          <h2 className="mb-3 text-2xl font-semibold text-[#0B3A5B]">
            Dolphin Sataya — Mer Rouge
          </h2>
          <p className="text-[#0B3A5B]/80">
            Croisières snorkelling et bien-être au cœur du lagon de Sataya, avec une approche respectueuse des dauphins.
            Encadrement francophone, bateau confortable, et rythme doux entre mises à l’eau et moments de détente.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#dates" className="rounded-md bg-[#14B7B8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#119da0]">
              Voir les dates
            </a>
            <a href="#gallery-bateau" className="rounded-md border border-[#EADCC8] px-4 py-2 text-sm text-[#0B3A5B]">
              Voir le bateau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
