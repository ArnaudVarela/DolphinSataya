// app/components/TrustBar.tsx
/* eslint-disable @next/next/no-img-element */
type Item = { label: string; Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element };

const IconSwimmer = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M6 7.5a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 0 0 6 7.5ZM2 17.25c1.9 0 2.85-1.25 4.75-1.25s2.85 1.25 4.75 1.25S14.35 16 16.25 16s2.85 1.25 4.75 1.25v1.5c-1.9 0-2.85-1.25-4.75-1.25s-2.85 1.25-4.75 1.25S7.65 17.5 5.75 17.5 2.9 18.75 1 18.75v-1.5c.37 0 .69-.01 1-.01Z"/>
    <path fill="currentColor" d="M3.25 12.5c2.2-.9 4.2-1.9 6.14-3.27.5-.36 1.17-.39 1.7-.08l2.35 1.35c.39.23.83.35 1.28.35h2.98c.61 0 1.1.49 1.1 1.1v.9h-4.09a3.6 3.6 0 0 1-1.77-.46l-1.23-.7c-2.18 1.22-4.4 2.1-6.9 2.79l-.56-1.98Z"/>
  </svg>
);

const IconStar = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="m12 2.5 2.97 6.02 6.65.97-4.81 4.69 1.14 6.64L12 17.98l-5.95 3.14 1.14-6.64-4.81-4.69 6.65-.97L12 2.5Z"/>
  </svg>
);

const IconDiploma = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M3 6.5h18v7.5H3V6.5Zm2 2v3.5h14V8.5H5Z"/>
    <path fill="currentColor" d="M7.5 18.5 12 16l4.5 2.5V14H7.5v4.5Z"/>
  </svg>
);

const IconBoat = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M4 17.5c3 0 3-1.5 6-1.5s3 1.5 6 1.5 3-1.5 6-1.5v1.75c-3 0-3 1.5-6 1.5s-3-1.5-6-1.5-3 1.5-6 1.5S1 19.75 1 19.75V16c3 0 3 1.5 6 1.5Z"/>
    <path fill="currentColor" d="M6 13.5l10.5-1.5L13 4.5 6 13.5Zm12.5-2.2 1.5.2V8.5h-1.5v2.8Z"/>
  </svg>
);

const items: Item[] = [
  { label: "+1 000 nageurs accompagnés", Icon: IconSwimmer },
  { label: "Note 4,8/5",                   Icon: IconStar    },
  { label: "Encadrement diplômé",         Icon: IconDiploma },
  { label: "Bateau catégorie confort",    Icon: IconBoat    },
];

export default function TrustBar() {
  return (
    <section className="bg-[#FAF7F2] border-b border-[#EADCC8]">
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <ul
          className="
            grid grid-cols-2 gap-y-6
            md:grid-cols-4 md:gap-y-0
            place-items-center
          "
        >
          {items.map(({label, Icon}) => (
            <li key={label} className="flex items-center gap-3 md:justify-center">
              <span
                className="
                  inline-flex h-11 w-11 items-center justify-center
                  rounded-full bg-[#F0E6D6] ring-1 ring-[#EADCC8] text-[#0B3A5B]
                "
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[#0B3A5B] font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
