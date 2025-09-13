import Container from "@/app/components/Container";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 mt-20">
      <Container className="py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-semibold">Agence Vidéo BE</div>
          <p className="text-sm text-gray-600 mt-2">
            Production vidéo et stratégie créateurs en Belgique.
          </p>
        </div>

        <div>
          <div className="font-semibold">Navigation</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Coordonnées</div>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li>Bruxelles, Belgique</li>
            <li>
              <a href="tel:+3220000000">+32 2 000 00 00</a>
            </li>
            <li>
              <a href="mailto:hello@agencevideobe.be">hello@agencevideobe.be</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Réseaux</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" aria-disabled>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-disabled>
                YouTube
              </a>
            </li>
            <li>
              <a href="#" aria-disabled>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-gray-100">
        <Container className="py-4 text-xs text-gray-600 flex items-center justify-between">
          <span>© {year} Agence Vidéo BE. Tous droits réservés.</span>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link>
          </span>
        </Container>
      </div>
    </footer>
  );
}
