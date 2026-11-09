// Vecchi URL del sito precedente → pagine attuali (redirect permanenti 308),
// così Google trasferisce l'indicizzazione e chi ha un vecchio link non
// finisce su una pagina 404.
const map = [
  ["/blog-details/zanzariere", "/blog/zanzariere"],
  ["/blog-details/risparmio-energetico", "/blog/risparmio-energetico"],
  ["/blog-details", "/blog"],
  ["/product-details", "/#prodotti"],
  ["/products", "/#prodotti"],
  ["/about", "/company"],
  ["/gallery_old", "/gallery"],
  // Pagine della galleria NextGEN del vecchio sito WordPress.
  ["/gallery/nggallery/:path*", "/gallery"],
  ["/error", "/"],
  ["/home", "/"],
];

const redirects = map.map(([source, destination]) => ({
  source,
  destination,
  permanent: true,
}));

export default redirects;
