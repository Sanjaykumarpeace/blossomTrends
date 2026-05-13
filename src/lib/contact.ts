export const SHOP = {
  name: "BLOSSOMTRENDS",
  nameKn: "ಬ್ಲೋಸ್ಸೋಮ್ತ್ರೆನ್ದ್ಸ್",
  tagline: "Where Fashion Blossoms",
  phone: "+91 96632 54548",
  phoneRaw: "+919663254548",
  whatsappRaw: "919663254548",
  email: "hello@blossomtrends.in",
  address: "Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064, India",
  addressShort: "Kattigenahalli, Yelahanka, Bengaluru",
  hours: "Mon – Sun · 10:30 AM – 9:00 PM",
  mapsLink: "https://maps.app.goo.gl/DXVC7JNdbLEU9LC98",
  mapsEmbed:
    "https://www.google.com/maps?q=Kattigenahalli,Yelahanka,Bengaluru&output=embed",
  instagram: "https://instagram.com/blossomtrends",
  facebook: "https://facebook.com/blossomtrends",
};

const defaultMsg =
  "Welcome! to the shop. Thank you for. I am interested in your collection and would like to confirm the next steps...";

export const waLink = (msg: string = defaultMsg) =>
  `https://wa.me/${SHOP.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SHOP.phoneRaw}`;
