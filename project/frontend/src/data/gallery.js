// Data powering the Gallery section (Gallery, Album Detail, Photo Detail).
// Kept separate from samplePosts.js / journeys.js since it models photo
// albums rather than blog posts or diary entries. Replace with real API
// data (GET /api/albums) once a backend is connected.

export const galleryFilterCategories = [
  "Mountains", "Lakes", "Rivers", "Waterfalls", "Forest", "Wildlife",
  "Sunrise", "Sunset", "Night", "Food", "Culture", "Road Trips", "Drone",
];

export const albums = [
  {
    slug: "hunza",
    name: "Hunza",
    region: "Gilgit-Baltistan",
    cover: "https://picsum.photos/seed/galhunza-cover/1200/900",
    description:
      "Four days of orchards, old forts, and Rakaposhi refusing to leave the skyline. This is the album I come back to most — Hunza photographs itself in the right light.",
    tags: ["Mountains", "Sunrise", "Sunset", "Culture"],
    views: 18420,
    journeyLink: "/post/four-days-in-hunza",
    destinationLink: "/explore",
    photos: [
      { id: "hunza-1", src: "https://picsum.photos/seed/galhunza1/1100/850", caption: "Karimabad rooftops at dusk", location: "Karimabad, Hunza", date: "2024-05-14", camera: "Sony A7III", lens: "50mm f/1.8", iso: "ISO 200", aperture: "f/2.8", shutter: "1/250s", tags: ["Sunset", "Culture"], likes: 342, story: "Shot from the fort above town, right as the valley lights started coming on one by one." },
      { id: "hunza-2", src: "https://picsum.photos/seed/galhunza2/1100/1350", caption: "Attabad Lake reflections", location: "Attabad Lake, Hunza", date: "2024-05-15", camera: "Sony A7III", lens: "24mm f/2.8", iso: "ISO 100", aperture: "f/8", shutter: "1/125s", tags: ["Lakes", "Mountains"], likes: 501, story: "Waited nearly forty minutes for the wind to die down enough for a mirror-still shot." },
      { id: "hunza-3", src: "https://picsum.photos/seed/galhunza3/1100/850", caption: "Passu Cones at first light", location: "Passu, Hunza", date: "2024-05-16", camera: "Sony A7III", lens: "70-200mm f/4", iso: "ISO 160", aperture: "f/6.3", shutter: "1/320s", tags: ["Mountains", "Sunrise"], likes: 288, story: "The cones catch the light about twenty minutes before everything else does." },
      { id: "hunza-4", src: "https://picsum.photos/seed/galhunza4/1100/1350", caption: "Old bazaar, apricots drying", location: "Karimabad, Hunza", date: "2024-05-14", camera: "Sony A7III", lens: "85mm f/1.8", iso: "ISO 320", aperture: "f/2.5", shutter: "1/320s", tags: ["Culture", "Food"], likes: 219, story: "One of my favourite quiet frames — nobody posed, nobody noticed the camera." },
      { id: "hunza-5", src: "https://picsum.photos/seed/galhunza5/1100/850", caption: "Rakaposhi from a roadside dhaba", location: "Rakaposhi Viewpoint, Hunza", date: "2024-05-17", camera: "Sony A7III", lens: "35mm f/2.8", iso: "ISO 100", aperture: "f/8", shutter: "1/250s", tags: ["Mountains"], likes: 176, story: "One of the few 7,000ers you can photograph while someone hands you a chai." },
    ],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    region: "Azad Kashmir",
    cover: "https://picsum.photos/seed/galkashmir-cover/1200/900",
    description:
      "Where the Neelum and Jhelum rivers meet, and the road north really begins. This album follows the wider Kashmir leg — Muzaffarabad down to the dam, LOC included.",
    tags: ["Rivers", "Mountains", "Road Trips"],
    views: 12760,
    journeyLink: "/travel-journal",
    destinationLink: "/explore",
    photos: [
      { id: "kashmir-1", src: "https://picsum.photos/seed/galkashmir1/1100/850", caption: "Where the rivers meet", location: "Muzaffarabad", date: "2025-04-02", camera: "Sony A7III", lens: "24mm f/2.8", iso: "ISO 100", aperture: "f/9", shutter: "1/200s", tags: ["Rivers"], likes: 264, story: "The exact confluence point of the Neelum and Jhelum, just below the old bridge." },
      { id: "kashmir-2", src: "https://picsum.photos/seed/galkashmir2/1100/1350", caption: "Ganga Choti summit trail", location: "Ganga Choti", date: "2025-04-13", camera: "Sony A7III", lens: "24-70mm f/2.8", iso: "ISO 200", aperture: "f/7.1", shutter: "1/250s", tags: ["Mountains"], likes: 331, story: "Snow patches still lining the trail in April — the last stretch was a proper workout." },
      { id: "kashmir-3", src: "https://picsum.photos/seed/galkashmir3/1100/850", caption: "Banjosa Lake, paddle boats", location: "Banjosa Lake", date: "2025-04-12", camera: "Sony A7III", lens: "50mm f/1.8", iso: "ISO 100", aperture: "f/4", shutter: "1/500s", tags: ["Lakes"], likes: 155, story: "A rest-day frame — nothing dramatic, just a slow afternoon on the water." },
      { id: "kashmir-4", src: "https://picsum.photos/seed/galkashmir4/1100/1350", caption: "Along the LOC road", location: "Line of Control, Kashmir", date: "2025-04-05", camera: "Sony A7III", lens: "35mm f/2.8", iso: "ISO 100", aperture: "f/8", shutter: "1/320s", tags: ["Road Trips", "Mountains"], likes: 210, story: "One of the quieter, more sobering stretches of the whole Kashmir leg." },
    ],
  },
  {
    slug: "murree",
    name: "Murree",
    region: "Murree Hills",
    cover: "https://picsum.photos/seed/galmurree-cover/1200/900",
    description:
      "Pine forests, fog, and the first proper hill-station chill of the year — Murree, Nathia Gali, and Ayubia all in one short, easy loop.",
    tags: ["Forest", "Mountains", "Night"],
    views: 9840,
    journeyLink: "/travel-journal",
    destinationLink: "/explore",
    photos: [
      { id: "murree-1", src: "https://picsum.photos/seed/galmurree1/1100/850", caption: "Mall Road, evening lights", location: "Murree", date: "2023-06-10", camera: "Sony A7III", lens: "35mm f/2", iso: "ISO 800", aperture: "f/2.8", shutter: "1/60s", tags: ["Night"], likes: 198, story: "Just after the streetlights came on and the rain had finally stopped." },
      { id: "murree-2", src: "https://picsum.photos/seed/galmurree2/1100/1350", caption: "Fog on the Mukshpuri trail", location: "Nathia Gali", date: "2023-06-12", camera: "Sony A7III", lens: "50mm f/1.8", iso: "ISO 400", aperture: "f/2.8", shutter: "1/160s", tags: ["Forest"], likes: 241, story: "We didn't make the summit — the fog rolled in too thick — but it made for the better photo anyway." },
      { id: "murree-3", src: "https://picsum.photos/seed/galmurree3/1100/850", caption: "Chairlift over the pine valley", location: "Ayubia", date: "2023-06-13", camera: "Sony A7III", lens: "70-200mm f/4", iso: "ISO 100", aperture: "f/6.3", shutter: "1/500s", tags: ["Mountains", "Forest"], likes: 176, story: "Touristy, and I enjoyed every second of it." },
    ],
  },
  {
    slug: "balakot",
    name: "Balakot",
    region: "Balakot",
    cover: "https://picsum.photos/seed/galbalakot-cover/1200/900",
    description: "A quiet stopover on the way north — river views, mountain air, and the start of the road toward Kaghan.",
    tags: ["Rivers", "Road Trips"],
    views: 5230,
    journeyLink: "/travel-journal",
    destinationLink: "/explore",
    photos: [
      { id: "balakot-1", src: "https://picsum.photos/seed/galbalakot1/1100/850", caption: "The Kunhar River", location: "Balakot", date: "2023-08-05", camera: "Sony A7III", lens: "24mm f/2.8", iso: "ISO 100", aperture: "f/9", shutter: "1/200s", tags: ["Rivers"], likes: 132, story: "Right where the road north properly begins." },
      { id: "balakot-2", src: "https://picsum.photos/seed/galbalakot2/1100/1350", caption: "Roadside stalls, morning", location: "Balakot", date: "2023-08-05", camera: "Sony A7III", lens: "50mm f/1.8", iso: "ISO 200", aperture: "f/2.8", shutter: "1/320s", tags: ["Food", "Culture"], likes: 98, story: "Fresh corn stalls lining the road before the climb toward Kaghan." },
    ],
  },
  {
    slug: "kaghan",
    name: "Kaghan Valley",
    region: "Kaghan",
    cover: "https://picsum.photos/seed/galkaghan-cover/1200/900",
    description:
      "Kawai to Babusar Top — lakes at every altitude, the best trout I've ever eaten, and Malika Parbat lighting up gold at sunrise over Saif-ul-Malook.",
    tags: ["Lakes", "Mountains", "Sunrise", "Waterfalls"],
    views: 15680,
    journeyLink: "/travel-journal",
    destinationLink: "/explore",
    photos: [
      { id: "kaghan-1", src: "https://picsum.photos/seed/galkaghan1/1100/850", caption: "Malika Parbat at sunrise", location: "Saif-ul-Malook", date: "2024-07-02", camera: "Sony A7III", lens: "24-70mm f/2.8", iso: "ISO 100", aperture: "f/8", shutter: "1/250s", tags: ["Lakes", "Sunrise", "Mountains"], likes: 612, story: "Completely still water, gold light on the peak — my favourite frame of the whole journal." },
      { id: "kaghan-2", src: "https://picsum.photos/seed/galkaghan2/1100/1350", caption: "Ansoo Lake, frozen edges", location: "Ansoo Lake", date: "2024-07-03", camera: "Sony A7III", lens: "35mm f/2.8", iso: "ISO 200", aperture: "f/7.1", shutter: "1/200s", tags: ["Lakes", "Mountains"], likes: 389, story: "Above 13,000 ft, and the lake was still half-frozen when we woke up." },
      { id: "kaghan-3", src: "https://picsum.photos/seed/galkaghan3/1100/850", caption: "Lulusar Lake, mirrored ridgeline", location: "Lulusar Lake", date: "2024-07-04", camera: "Sony A7III", lens: "24mm f/4", iso: "ISO 100", aperture: "f/10", shutter: "1/160s", tags: ["Lakes", "Mountains"], likes: 447, story: "The reflection was so clean it looked painted rather than photographed." },
      { id: "kaghan-4", src: "https://picsum.photos/seed/galkaghan4/1100/1350", caption: "Last light over Babusar Top", location: "Babusar Top", date: "2024-07-05", camera: "Sony A7III", lens: "70-200mm f/4", iso: "ISO 200", aperture: "f/5.6", shutter: "1/320s", tags: ["Sunset", "Mountains"], likes: 356, story: "Snowbanks turning pink as the pass emptied out for the evening." },
    ],
  },
  {
    slug: "neelum-valley",
    name: "Neelum Valley",
    region: "Kashmir",
    cover: "https://picsum.photos/seed/galneelum-cover/1200/900",
    description:
      "Keran, Kundal Shahi Waterfall, Sharda, Kel, and Arang Kel — the roadless meadow that changed how I think about a good hike.",
    tags: ["Rivers", "Waterfalls", "Forest", "Culture"],
    views: 11290,
    journeyLink: "/travel-journal",
    destinationLink: "/explore",
    photos: [
      { id: "neelum-1", src: "https://picsum.photos/seed/galneelum1/1100/850", caption: "Kundal Shahi Waterfall", location: "Kundal Shahi", date: "2025-04-08", camera: "Sony A7III", lens: "24mm f/2.8", iso: "ISO 100", aperture: "f/11", shutter: "1/8s", tags: ["Waterfalls"], likes: 298, story: "Long exposure on a tripod wedged between two rocks — worth the wet shoes." },
      { id: "neelum-2", src: "https://picsum.photos/seed/galneelum2/1100/1350", caption: "Arang Kel's roadless meadow", location: "Arang Kel", date: "2025-04-09", camera: "Sony A7III", lens: "35mm f/2.8", iso: "ISO 100", aperture: "f/6.3", shutter: "1/250s", tags: ["Mountains", "Forest"], likes: 421, story: "No road reaches here — just a chairlift and a short hike up." },
      { id: "neelum-3", src: "https://picsum.photos/seed/galneelum3/1100/850", caption: "Sharda ruins, greenest stretch of river", location: "Sharda Valley", date: "2025-04-10", camera: "Sony A7III", lens: "50mm f/1.8", iso: "ISO 100", aperture: "f/5.6", shutter: "1/320s", tags: ["Culture", "Rivers"], likes: 267, story: "Ancient ruins next to the Neelum's greenest, clearest stretch of water." },
    ],
  },
];

export const getAlbumBySlug = (slug) => albums.find((a) => a.slug === slug);

export const getAllGalleryPhotos = () =>
  albums.flatMap((album) => album.photos.map((photo) => ({ ...photo, albumSlug: album.slug, albumName: album.name })));

export const getPhotoInAlbum = (albumSlug, photoId) => {
  const album = getAlbumBySlug(albumSlug);
  if (!album) return { album: null, photo: null };
  const idx = album.photos.findIndex((p) => p.id === photoId);
  return {
    album,
    photo: idx !== -1 ? album.photos[idx] : null,
    prev: idx > 0 ? album.photos[idx - 1] : null,
    next: idx !== -1 && idx < album.photos.length - 1 ? album.photos[idx + 1] : null,
  };
};

export const featuredAlbumSlugs = ["hunza", "kashmir", "murree", "balakot", "kaghan", "neelum-valley"];

export const photographyCollections = [
  { name: "Nature", icon: "bi-tree", tag: "Forest" },
  { name: "Mountains", icon: "bi-triangle", tag: "Mountains" },
  { name: "Lakes", icon: "bi-droplet", tag: "Lakes" },
  { name: "Rivers", icon: "bi-water", tag: "Rivers" },
  { name: "Waterfalls", icon: "bi-cloud-drizzle", tag: "Waterfalls" },
  { name: "Wildlife", icon: "bi-bug", tag: "Wildlife" },
  { name: "Culture", icon: "bi-people", tag: "Culture" },
  { name: "Food", icon: "bi-cup-hot", tag: "Food" },
  { name: "Road Trips", icon: "bi-signpost-2", tag: "Road Trips" },
  { name: "Night Photography", icon: "bi-moon-stars", tag: "Night" },
  { name: "Drone Photography", icon: "bi-airplane", tag: "Drone" },
];

export const favoriteCollections = [
  { name: "Pakistan Beauty", icon: "bi-star", albumSlug: "hunza" },
  { name: "Hidden Gems", icon: "bi-gem", albumSlug: "neelum-valley" },
  { name: "Mountain Life", icon: "bi-triangle", albumSlug: "kaghan" },
  { name: "Lake Views", icon: "bi-droplet", albumSlug: "kaghan" },
  { name: "Road Trips", icon: "bi-signpost-2", albumSlug: "balakot" },
  { name: "Northern Adventures", icon: "bi-compass", albumSlug: "kashmir" },
];

export const shotOfTheWeek = {
  ...getPhotoInAlbum("kaghan", "kaghan-1").photo,
  src: "/images/m.jpeg",
  albumSlug: "kaghan",
  title: "Malika Parbat at Sunrise",
};

export const beforeAfterExamples = [
  {
    caption: "Attabad Lake — pulling back the shadows and cooling the white balance.",
    before: "https://picsum.photos/seed/galba1before/900/650",
    after: "https://picsum.photos/seed/galba1after/900/650",
  },
  {
    caption: "Saif-ul-Malook — a small crop and a warmer sky to match how it actually felt.",
    before: "https://picsum.photos/seed/galba2before/900/650",
    after: "https://picsum.photos/seed/galba2after/900/650",
  },
];

export const photographyGear = [
  { category: "Camera", icon: "bi-camera", item: "Sony A7III" },
  { category: "Mobile", icon: "bi-phone", item: "iPhone 14 Pro (backup + reels)" },
  { category: "Drone", icon: "bi-airplane", item: "DJI Mini 3 Pro" },
  { category: "Lens", icon: "bi-camera2", item: "24-70mm f/2.8, 50mm f/1.8, 70-200mm f/4" },
  { category: "Tripod", icon: "bi-diagram-3", item: "Manfrotto Befree Advanced" },
  { category: "Camera Bag", icon: "bi-bag", item: "Peak Design Everyday Backpack 20L" },
  { category: "Power Bank", icon: "bi-battery-charging", item: "Anker 20,000mAh" },
];

export const behindTheShot = {
  ...getPhotoInAlbum("neelum-valley", "neelum-1").photo,
  src: "/images/3.jpeg",
  weather: "Overcast, light drizzle",
  albumSlug: "neelum-valley",
  albumName: "Neelum Valley",
};

export const photographyQuotes = [
  "A camera doesn't capture a place. It captures the version of yourself that showed up to see it.",
  "I don't chase perfect light — I wait for it, and that waiting has taught me more than any lens ever could.",
  "The best photographs are always the ones I almost didn't take.",
  "Every album here is really just a list of places I stood still long enough to notice something.",
];
