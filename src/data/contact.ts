export const academyLocation = {
  plusCode: "5MRW+W2H",
  address: "IIT Guwahati, Guwahati, Assam 781039",
  label: "Electronics & ICT Academy, IIT Guwahati",
} as const;

export const academyMapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${academyLocation.plusCode}, ${academyLocation.address}`
)}&z=15&output=embed`;

export const academyMapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${academyLocation.plusCode}, ${academyLocation.label}, ${academyLocation.address}`
)}`;
