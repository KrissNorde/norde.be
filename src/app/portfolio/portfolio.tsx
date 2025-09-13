import Container from "../components/Container";

export const metadata = {
  title: "Portfolio – Réalisations vidéo",
  description:
    "Sélection de projets: publicités, documentaires, mariages, contenus YouTube.",
  canonical: "https://norde.be/portfolio",
};

export default function Portfolio() {
  return (
    <>
      <section className="py-12">
        <Container>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="mt-4 text-gray-700">
            Bientôt: une sélection de nos réalisations.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-gray-100 rounded" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
