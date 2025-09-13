import Container from "@/app/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Home | Norde",
  alternates: { canonical: "/" },
  description:
    "Vidéastes basés en Belgique. Nous accompagnons créateurs et marques: YouTube, publicité storytelling, mariage/documentaire, 3D & VFX.",
};

export default function Home() {
  return (
    <>
      <section className="pt-12 pb-16">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Agence vidéo pour créateurs et marques en Belgique
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl">
            Stratégie YouTube, publicité storytelling, mariage & documentaire,
            documentaire d’entreprise, 3D/VFX.
          </p>
          <div className="mt-6 flex gap-3">
            <Link className="btn btn-primary" href="/contact">
              Demander un devis
            </Link>
            <Link className="btn btn-outline" href="/portfolio">
              Voir le portfolio
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-xl font-semibold">Services phares</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            <li className="p-4 rounded border bg-white">
              <h3 className="font-medium">Agence YouTube pour créateurs</h3>
              <p className="text-sm text-gray-600">
                Stratégie, production et optimisation.
              </p>
            </li>
            <li className="p-4 rounded border bg-white">
              <h3 className="font-medium">Publicité storytelling</h3>
              <p className="text-sm text-gray-600">
                Concept → tournage → diffusion.
              </p>
            </li>
            <li className="p-4 rounded border bg-white">
              <h3 className="font-medium">Mariage & documentaire</h3>
              <p className="text-sm text-gray-600">
                Films authentiques & cinématiques.
              </p>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
