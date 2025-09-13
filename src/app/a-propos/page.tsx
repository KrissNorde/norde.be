import Container from "../components/Container";

export const metadata = {
  title: "À propos – Agence vidéo en Belgique",
  description:
    "Brève histoire de la création de l’agence et notre démarche créative.",
  canonical: "https://norde.be/a-propos",
};

export default function APropos() {
  return (
    <>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold">À propos</h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            [Brève histoire de la création de l’agence] — Nous sommes une équipe
            de vidéastes basée en Belgique, passionnée par le récit et la
            qualité d’image. Notre mission: créer des vidéos qui performent et
            qui touchent humainement.
          </p>
          <h2 className="mt-8 text-xl font-semibold">Notre approche</h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            Pré-production rigoureuse, tournage agile, post-production soignée,
            et distribution pensée SEO/social.
          </p>
        </Container>
      </section>
    </>
  );
}
