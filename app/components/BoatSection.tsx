/* eslint-disable @next/next/no-img-element */
import { boatImages } from "../data/boatImages";

export default function BoatSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-[#0B3A5B]">Le bateau & les cabines</h2>
            <ul className="space-y-3 text-[#0B3A5B]/80">
              {['Cabines doubles / twin avec rangements', 'Pont supérieur pour Pilates & relaxation', 'Salon et salle à manger climatisés', 'Plateforme dédiée snorkeling / plongée'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded bg-[#14B7B8]" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#gallery-bateau" className="rounded-md border border-[#EADCC8] px-4 py-2 text-sm text-[#0B3A5B]">Voir la galerie</a>
              <a href="#dates" className="rounded-md bg-[#14B7B8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#119da0]">Voir les dates</a>
            </div>
          </div>
          <div className="rounded-xl border border-[#EADCC8] p-2">
            <img src={boatImages[0].src} alt={boatImages[0].alt} className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" />
            <p className="mt-2 text-center text-xs text-[#0B3A5B]/70">{boatImages[0].caption}</p>
          </div>
        </div>
        <div id="gallery-bateau" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {boatImages.slice(1).map((img, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border border-[#EADCC8] bg-[#FAF7F2]">
              <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
              <figcaption className="px-3 py-2 text-center text-xs text-[#0B3A5B]/70">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
