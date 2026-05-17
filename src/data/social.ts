export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/eict-academy-7ab681123/",
  x: "https://x.com/eictacad/",
  instagram: "https://www.instagram.com/eict_academy_iitguwahati/?hl=en",
  facebook: "https://www.facebook.com/eictacadguwahati/",
} as const;

/** Facebook Page Plugin content height (px). Increase up to ~2000 for more timeline; iframe must match. */
export const FACEBOOK_EMBED_HEIGHT = 650;

export const facebookPagePluginSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  socialLinks.facebook
)}&tabs=timeline&width=500&height=${FACEBOOK_EMBED_HEIGHT}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`;
