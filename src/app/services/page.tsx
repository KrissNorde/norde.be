import Container from "../components/Container";

export const metadata = {
  title: "Services – Agence vidéo en Belgique",
  description:
    "YouTube, publicité, mariage/documentaire, documentaire d’entreprise, 3D & VFX.",
  canonical: "https://norde.be/services",
};
const services = [
  {
    slug: "agence-youtube",
    title: "Agence YouTube pour créateurs",
    desc: "Stratégie, production, optimisation SEO/miniatures.",
  },
  {
    slug: "publicite-storytelling",
    title: "Publicité Storytelling",
    desc: "Concept, tournage, post-prod, livraison multi-formats.",
  },
  {
    slug: "mariage-documentaire",
    title: "Mariage & documentaire de mariage",
    desc: "Captations sensibles et films cinématiques.",
  },
  {
    slug: "documentaire-entreprise",
    title: "Documentaire d’entreprise",
    desc: "Mettre en scène votre impact et votre culture.",
  },
  {
    slug: "3d-vfx",
    title: "3D & VFX",
    desc: "Motion design, compositing, intégrations réalistes.",
  },
];

export default function Services() {
  return (
    <>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold">Services</h1>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {services.map((s) => (
              <li key={s.slug} className="p-5 rounded border bg-white">
                <h2 className="font-semibold">{s.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
