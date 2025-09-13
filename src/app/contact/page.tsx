export const metadata = {
  title: "Contact | Norde",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="container">
      <h1>Contact</h1>
      <p>Expliquez votre projet et vos objectifs. Réponse sous 24–48h.</p>
      <ul>
        <li>
          Email: <a href="mailto:hello@exemple.be">hello@exemple.be</a>
        </li>
        <li>
          Téléphone: <a href="tel:+32470123456">+32 470 12 34 56</a>
        </li>
      </ul>
      <form action="mailto:hello@exemple.be" method="post" encType="text/plain">
        <input name="nom" placeholder="Votre nom" required />
        <input name="email" type="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required />
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}
