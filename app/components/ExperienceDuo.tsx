/* eslint-disable @next/next/no-img-element */
export default function ExperienceDuo(){
  const cards = [
    {
      src: "/images/brand/yacht-sunset-dolphin-sataya-red-sea.webp",
      alt: "Yacht Dolphin Sataya au coucher du soleil — Mer Rouge, Égypte",
      title: "Confort & douceur",
      text: "Espaces généreux, ponts pour se relaxer au sunset, cabines twins lumineuses."
    },
    {
      src: "/images/brand/snorkeling-with-dolphins-sataya-red-sea.webp",
      alt: "Snorkeling avec les dauphins sauvages à Sataya — approche respectueuse",
      title: "Rencontres responsables",
      text: "Mises à l’eau adaptées au niveau de chacun, respect strict de la charte dauphins."
    }
  ];

  return (
    <section className="bg-[#FAF7F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0B3A5B]">L&apos;expérience en 2 images</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-[#EADCC8] bg-white shadow-sm">
              <img src={c.src} alt={c.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="mb-1 text-lg font-semibold text-[#0B3A5B]">{c.title}</h3>
                <p className="text-[#0B3A5B]/80">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
