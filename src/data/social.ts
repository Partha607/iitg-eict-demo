export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/eict-academy-7ab681123/",
  x: "https://x.com/eictacad/",
  instagram: "https://www.instagram.com/eict_academy_iitguwahati/?hl=en",
  facebook: "https://www.facebook.com/eictacadguwahati/",
} as const;

export const facebookPagePluginSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  socialLinks.facebook
)}&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`;
