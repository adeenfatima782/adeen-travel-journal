// Placeholder data so the design can be previewed before a backend is connected.
// Replace with real API data (GET /api/posts) once the backend is wired up.

export const categories = [
  { name: "Travel Diaries", slug: "travel-diaries" },
  { name: "Photography", slug: "photography" },
  { name: "Gallery", slug: "gallery" },
];

// A few original lines in Adeen's own voice — reused across the post detail
// page, the About page, and the homepage quote banner.
export const signatureQuotes = [
  "I don't chase perfect light — I wait for it, and that waiting has taught me more than any lens ever could.",
  "Every valley I've walked through has left something with me and taken nothing away.",
  "A camera doesn't capture a place. It captures the version of yourself that showed up to see it.",
  "The best photographs are always the ones I almost didn't take.",
  "I travel to notice things, and I photograph so I don't forget how they felt.",
];

export const samplePosts = [
  {
    id: 1,
    title: "Four Days in Hunza: Where the Mountains Meet the Sky",
    slug: "four-days-in-hunza",
    excerpt:
      "A slow travelled diary through Karimabad, Attabad Lake, and the quiet villages in between — with the light that made me fall in love with this valley.",
    category: "Travel Diaries",
    location: "Hunza Valley, Pakistan",
    cover: "https://picsum.photos/seed/hunza1/1200/900",
    date: "2026-05-14",
    tilt: "-3deg",
    content: [
      "I arrived in Karimabad after dark, which I'd later decide was the best possible way to see Hunza for the first time — because I woke up the next morning to Rakaposhi standing outside my window like it had always been there, like the mountain had simply been waiting behind the curtain for me to open it.",
      "The first day was slow on purpose. I walked through the old bazaar, drank more cherry juice than I'll admit to, and let the apricot orchards decide my route instead of a map. Every corner had a view I wasn't ready for — a courtyard, a doorway painted a color I couldn't name, an old man selling dried apricots who insisted I try three different varieties before he'd let me buy any.",
      "By midmorning I'd stopped trying to plan the day at all. There's a particular kind of freedom in a place where getting lost just means finding a different orchard, a different view of the same mountain from a slightly different angle. I sat with a cup of tea outside a small shop for almost an hour, not because I needed the rest but because nobody around me seemed to be in a hurry, and eventually that unhurried pace became contagious.",
      "By the second day, Attabad Lake had turned that impossible turquoise it's known for. I sat at the edge for almost an hour before I even took my camera out — some places ask you to just look first. The color genuinely doesn't translate through a lens the way it hits you in person; every photo I eventually took felt like a slightly dimmer version of what was actually in front of me.",
      "We took a small boat out onto the lake in the afternoon, and the boatman, who'd clearly done this ride a thousand times, still pointed out the same landmarks with the same enthusiasm as if it were his first time too. I asked him how long he'd been doing this, and he just laughed and said long enough to stop counting.",
      "The third day took me up toward Baltit Fort, walking the narrow lanes of Karimabad's old town in the late afternoon light. The fort itself, with Rakaposhi framed perfectly behind it, might be one of the most photographed views in northern Pakistan, and I understood why the moment I saw it — some views really are exactly as good as everyone says.",
      "What stayed with me longest wasn't a single view, though. It was how unhurried everything felt. Nobody in Hunza seemed to be rushing toward anything, and by the third day, neither was I. I found myself measuring the day in orchards and cups of tea instead of hours, and by the time I had to leave, four days genuinely didn't feel like enough.",
      "I keep coming back to one specific evening — sitting on the guesthouse rooftop with a plate of Hunza's famous apricot cake, watching the last light climb up Rakaposhi's face until only the very peak was still lit gold while everything below had already gone dark. It's the kind of moment that doesn't need editing or a caption. It just needed me to be sitting there, camera down, actually watching it happen.",
      "If you're planning your own trip here, give it more time than you think you need. Hunza doesn't reward a rushed itinerary — it rewards exactly the kind of slow, aimless wandering that turned my four days into one of the most memorable trips I've ever taken.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/hunzagal1/900/700", caption: "The old bazaar in Karimabad, just after opening." },
      { src: "https://picsum.photos/seed/hunzagal2/900/700", caption: "Attabad Lake, roughly an hour before sunset." },
      { src: "https://picsum.photos/seed/hunzagal3/900/700", caption: "Apricot orchards on the walk out of town." },
    ],
    quote: "Hunza didn't ask me to hurry, so for four days, I didn't.",
  },
  {
    id: 2,
    title: "Golden Hour: A Field Guide to Shooting Warm Light",
    slug: "golden-hour-field-guide",
    excerpt:
      "The one hour of the day that changes everything about a photograph — settings, angles, and the patience it takes to wait for it.",
    category: "Photography",
    location: "",
    cover: "https://picsum.photos/seed/goldenhour/1200/900",
    date: "2026-06-02",
    tilt: "2deg",
    content: [
      "Golden hour isn't really about the settings — it's about being in position twenty minutes before you think you need to be, because the light changes faster than you expect once the sun actually starts dropping. I've missed more good shots by arriving 'on time' than I ever have by showing up too early.",
      "I shoot most of my golden-hour work at a lower ISO than feels natural, letting the shadows go a little darker than the meter suggests. That warmth in the highlights is the whole point; don't let the camera talk you out of it. Most cameras want to average everything into a neutral, correctly-exposed frame, and neutral is exactly what you don't want during that hour.",
      "The mistake I made for years was pointing my lens only at the sun. Turn around. The light hitting everything behind you is usually softer, more even, and far more forgiving for portraits — faces don't squint, shadows fall gently instead of harshly, and the whole frame tends to glow rather than blow out.",
      "There's also a narrower window inside golden hour that most people miss entirely — the last five minutes before the light turns properly flat. It's subtle, but the color shifts from a rich gold into something almost pink just before it fades, and that five-minute window has given me some of my favorite frames from the whole journal.",
      "Composition matters more during golden hour, not less, because the temptation is to just point at the pretty light and shoot. I try to still think about foreground elements — a rock, a person, a tree branch — anything that gives the warm light something specific to fall on rather than just filling the frame uniformly.",
      "White balance is worth manually adjusting rather than trusting auto during this hour. Auto white balance tends to correct out exactly the warmth you're chasing, treating the golden cast as an error to fix rather than the entire reason you're out there with a camera in the first place.",
      "None of this replaces just going outside often enough to learn how the light behaves in your own part of the world. My presets are a starting point, never a substitute for watching the sky. Every location has its own version of golden hour — the mountains stretch it out differently than the plains do, and the only way to really learn that is to keep showing up, evening after evening, camera in hand.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/goldengal1/900/700", caption: "Shot facing away from the sun — softer, more even light." },
      { src: "https://picsum.photos/seed/goldengal2/900/700", caption: "The last five minutes before the light turns flat." },
    ],
    quote: "I don't chase perfect light — I wait for it, and that waiting has taught me more than any lens ever could.",
  },
  {
    id: 3,
    title: "24 Hours in Skardu — A Photo Diary",
    slug: "24-hours-in-skardu",
    excerpt: "No long stories today, just the light, the lake, and everything my camera couldn't look away from.",
    category: "Gallery",
    location: "Skardu, Pakistan",
    cover: "https://picsum.photos/seed/skardu2/1200/900",
    date: "2026-06-20",
    tilt: "-2deg",
    content: [
      "Some days don't need a story, just a record — so this one is mostly photographs, taken over about twenty-four hours around Skardu and the road out toward Shigar.",
      "Early morning belonged to the Indus, still and grey before the wind picked up. There's a particular stillness to that stretch of river right before sunrise, before any boats are out and before the wind starts moving across the water, and I've learned to set an alarm specifically for that narrow window rather than a generic 'sunrise' time.",
      "By mid-morning, the road out toward Shigar opened up into a landscape that genuinely looks unlike anywhere else I've photographed in Pakistan — dry, pale rock formations against a sky so blue it looked artificially saturated, though nothing about the edit was pushed that far.",
      "We stopped at a roadside spot nobody had warned me about, a small bend in the road with an unexpected view down into a valley that wasn't marked on any map I'd checked beforehand. Some of the best frames from this whole trip came from exactly that kind of unplanned stop.",
      "By afternoon, the light had turned everything gold, and the same rock formations that looked stark and pale in the morning suddenly looked warm and almost soft, proof that the same landscape can hand you two completely different moods depending purely on what time you show up.",
      "By night, the sky did something I still don't have the vocabulary for — Skardu's altitude and dry air mean genuinely dark skies, and the stars came out in a density I hadn't seen since a childhood trip much further north. I spent almost an hour just lying on the hood of the car looking up, camera mostly forgotten beside me.",
      "If you only have twenty-four hours here, don't try to see everything. Pick the Indus at dawn, the Shigar road at midday, and whatever roadside stop looks interesting along the way — Skardu rewards exactly this kind of loose, photography-first itinerary far more than a packed checklist of sights.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/skardugal1/900/700", caption: "The Indus at 6am, before the wind picks up." },
      { src: "https://picsum.photos/seed/skardugal2/900/700", caption: "Road to Shigar, mid-afternoon." },
      { src: "https://picsum.photos/seed/skardugal3/900/700", caption: "A roadside stop nobody warned me about." },
      { src: "https://picsum.photos/seed/skardugal4/900/700", caption: "Last light over the valley." },
    ],
    quote: "A camera doesn't capture a place. It captures the version of yourself that showed up to see it.",
  },
  {
    id: 4,
    title: "What's in My Bag: Gear for Slow Travel Photography",
    slug: "whats-in-my-bag",
    excerpt: "The camera, the one lens I never leave behind, and why less gear has made me a better photographer.",
    category: "Photography",
    location: "",
    cover: "https://picsum.photos/seed/camerabag/1200/900",
    date: "2026-07-01",
    tilt: "3deg",
    content: [
      "For years I traveled with three lenses and used one of them. These days my bag is smaller, and honestly, my photos are better for it — fewer choices means I spend more time looking and less time deciding, and deciding is the thing that costs you the shot when the light only lasts a few minutes.",
      "One camera body, one versatile prime lens, a small tripod that's survived more bus rides than I can count, and extra batteries — that's most of what actually leaves the bag on any given day. I used to pack for every possible scenario; now I pack for the scenario I'm actually walking into, and I've stopped missing the gear I left behind.",
      "The prime lens took some adjusting to. There's no zooming out of a bad composition — you have to move your feet instead, walk closer or further, change your own position rather than twist a ring. It felt limiting for about a month, and then it became the single biggest improvement to my actual photography, because it forced me to think about composition before I even raised the camera.",
      "A small tripod earns its space in the bag purely for two situations — long exposures on waterfalls and rivers, and the rare group photo where I actually want to be in the frame myself. It's light enough that I barely notice it, which is exactly why it still makes the cut after years of otherwise ruthless bag-editing.",
      "Batteries matter more in the cold than people expect. Anywhere above a certain altitude, cold drains a battery far faster than it would at sea level, and I've learned to keep a spare tucked somewhere warm, close to my body, rather than sitting in an outer pocket exposed to the same cold that's draining the one in the camera.",
      "The gear people ask about most is the least important part of any photograph I've taken. What matters is showing up, and showing up early enough that the light is still doing something interesting. I've taken photos I'm proud of with a phone camera during trips where my main gear failed, and I've come home with nothing usable despite carrying everything, purely because I showed up at the wrong hour.",
      "If you're trying to figure out what to pack for your own next trip, start smaller than feels comfortable. You'll be amazed how much a lighter bag changes how far you're willing to walk for a view, and how far you're willing to walk is usually what determines whether you get the shot at all.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/bagitem1/900/700", caption: "Everything that actually leaves the bag, most days." },
    ],
    quote: "The best photographs are always the ones I almost didn't take.",
  },
  {
    id: 5,
    title: "Solo in Swat: Notes on Travelling Alone as a Woman",
    slug: "solo-in-swat",
    excerpt: "What I packed, what I was afraid of, and what I found instead — a valley that felt like a long exhale.",
    category: "Travel Diaries",
    location: "Swat Valley, Pakistan",
    cover: "https://picsum.photos/seed/swatvalley/1200/900",
    date: "2026-07-10",
    tilt: "-2deg",
    content: [
      "I planned this trip for three months and still almost cancelled it the night before. Travelling alone always sounds braver in theory than it feels the morning you actually leave, standing by your packed bag wondering if you've made a mistake nobody's going to be around to help you fix.",
      "Swat, it turns out, is generous to first-time solo travellers. The guesthouse owner in Mingora insisted on feeding me before letting me talk about routes, and somehow that set the tone for the whole week — every place I stopped afterward seemed to operate on the same quiet assumption that you feed a guest before anything else gets discussed.",
      "The first two days were the hardest, honestly. I kept second-guessing every decision, from which path to walk to whether it was safe to sit alone at a roadside stall drinking tea. Nobody around me seemed to think anything of it, and slowly, their unbothered normalcy became mine too.",
      "I spent most mornings walking without a real destination, camera in hand, letting the valley decide what was worth stopping for. By the fourth day, the nervousness I'd packed in Lahore had quietly disappeared somewhere along the river, replaced by something closer to genuine comfort in my own company.",
      "There's a specific kind of confidence that only comes from solving small problems entirely on your own — finding a place to eat in a town you don't know, asking for directions in a dialect you're only half-fluent in, deciding for yourself when a day has been long enough and it's time to head back. Each of those small decisions added up to something bigger by the end of the week.",
      "I met other travellers along the way, mostly briefly — a family who insisted I join their lunch because eating alone at a roadside stop apparently wasn't something they could allow, a group of students on their own trip who pointed me toward a viewpoint I wouldn't have found otherwise. Solo doesn't have to mean alone the entire time; it just means the trip is yours to shape.",
      "By the last day, I'd stopped counting how many people asked if I was travelling by myself, and stopped feeling the need to explain it every time. It just was what it was — a woman, a camera, and a valley that turned out to be exactly as generous as I'd hoped it might be.",
      "If you're waiting for the fear to go away completely before you go somewhere alone — it won't. Go anyway, and let the place talk you out of it slowly, the way Swat did for me. The fear doesn't disappear before the trip; it disappears during it, a little more each day, until by the end you can barely remember what you were so nervous about.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/swatgal1/900/700", caption: "Mist over the river, first morning in Mingora." },
      { src: "https://picsum.photos/seed/swatgal2/900/700", caption: "A path I followed with no real plan." },
    ],
    quote: "Every valley I've walked through has left something with me and taken nothing away.",
  },
  {
    id: 6,
    title: "Reflections: Water, Light, and Patience",
    slug: "reflections-water-light",
    excerpt: "A small gallery from three lakes, three seasons, and the mirror each one held up to the sky.",
    category: "Gallery",
    location: "Northern Pakistan",
    cover: "https://picsum.photos/seed/reflections/1200/900",
    date: "2026-07-18",
    tilt: "2deg",
    content: [
      "Reflections are mostly a lesson in patience — the water has to be still, the wind has to cooperate, and you usually have about ten minutes before either of those things changes its mind. I've learned to treat that ten-minute window as sacred, dropping whatever else I'm doing the moment I notice the water has gone glassy.",
      "This set moves through three lakes across three different seasons: Saif-ul-Malook in early summer, Kachura in late monsoon, and a nameless roadside lake near Naltar that I still can't find on most maps, despite trying more than once to retrace the exact turn we took to get there.",
      "Saif-ul-Malook's reflection is the one everyone photographs, and for good reason — Malika Parbat sitting directly behind that turquoise water, doubled perfectly in the surface when the wind allows it, is genuinely one of the most photogenic combinations in the country. I arrived early enough to catch it before the boats disturbed the surface, and that timing made all the difference.",
      "Kachura, in contrast, held its stillness for far longer than I expected during monsoon season, when I'd assumed rain and wind would make a clean reflection nearly impossible. Instead, a lull between showers gave me almost twenty full minutes of mirror-calm water, layered with a soft grey sky that made the whole scene feel quieter than the usual bright-blue lake shots.",
      "The nameless lake near Naltar came from a wrong turn more than a plan — we'd meant to head somewhere else entirely, and ended up parked beside water so still it looked painted rather than photographed. No name, no marked trail, just a lucky stop that happened to align with exactly the right ten minutes of calm.",
      "What ties these three together isn't the location so much as the discipline of waiting. Every reflection shot in this set involved standing at the edge of water doing essentially nothing for a while — no camera raised, no composition planned — just watching until the surface decided to cooperate.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/reflectgal1/900/700", caption: "Saif-ul-Malook, early summer." },
      { src: "https://picsum.photos/seed/reflectgal2/900/700", caption: "Kachura, late monsoon stillness." },
      { src: "https://picsum.photos/seed/reflectgal3/900/700", caption: "A nameless lake near Naltar." },
    ],
    quote: "I travel to notice things, and I photograph so I don't forget how they felt.",
  },
  {
    id: 7,
    title: "Fairy Meadows: The Hike That Humbled Me",
    slug: "fairy-meadows-hike",
    excerpt: "Nanga Parbat up close, a trail steeper than any photo prepares you for, and the sunrise that made it worth it.",
    category: "Travel Diaries",
    location: "Fairy Meadows, Pakistan",
    cover: "https://picsum.photos/seed/fairymeadows/1200/900",
    date: "2026-07-25",
    tilt: "-3deg",
    content: [
      "The jeep ride up to Fairy Meadows is famous for being terrifying, and it earns every bit of that reputation. I spent most of it with my eyes closed and my camera safely zipped away, gripping whatever part of the seat I could reach while the driver navigated the narrow track like it was an ordinary Tuesday commute.",
      "The hike from the jeep drop-off is short on paper and long in practice — steep, thin air, and a trail that keeps promising the view is 'just around the next bend' for far longer than feels fair. I stopped counting how many times I'd been told 'almost there' by the time we actually arrived.",
      "Our guide carried far more weight than I did and still somehow found the breath to point out landmarks along the way — a particular rock formation, a stream crossing, the exact spot where Nanga Parbat first becomes visible through the trees. I was too out of breath most of the time to do more than nod.",
      "We arrived at the guesthouse well after dark, legs shaking, and I remember thinking the whole trip might not have been worth the effort — a thought that lasted exactly until the next morning, when I stepped outside before sunrise into cold enough to see my own breath, camera already in hand out of habit rather than any real hope of a good shot.",
      "None of it mattered by sunrise the next morning. Nanga Parbat turned pink, then gold, then a white so bright it was hard to look at directly, and every complaint from the day before evaporated. I've photographed a lot of mountains since, but that particular sequence of color, watched in near silence with a handful of other exhausted hikers, remains one of the best mornings of my life.",
      "The descent felt entirely different from the climb up, lighter in every sense — the jeep ride back down even felt less terrifying, though I suspect that had more to do with my state of mind than any actual change in the driver's skill.",
      "If you're considering this hike, don't let the reputation of the jeep ride talk you out of it. It's genuinely uncomfortable, and the hike afterward is genuinely hard, but the sunrise waiting at the end makes a strong case for doing hard things purely for the view at the finish.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/fairygal1/900/700", caption: "Nanga Parbat, about ninety seconds after sunrise." },
      { src: "https://picsum.photos/seed/fairygal2/900/700", caption: "The trail that never seemed to end." },
    ],
    quote: "Every valley I've walked through has left something with me and taken nothing away.",
  },
  {
    id: 8,
    title: "Editing Like You Were There: My Lightroom Workflow",
    slug: "editing-workflow-lightroom",
    excerpt: "How I edit travel photos to feel like the moment, not like a filter — and the three sliders I actually use.",
    category: "Photography",
    location: "",
    cover: "https://picsum.photos/seed/editingworkflow/1200/900",
    date: "2026-08-02",
    tilt: "2deg",
    content: [
      "My editing rule is simple: if a photo needs heavy correction to look believable, I probably didn't nail the shot to begin with. Editing should restore what I remember, not invent something new. I try to treat every edit as a small correction back toward memory, never a redesign of what actually happened.",
      "In practice, that means I lean on three sliders more than anything else — exposure, white balance, and a gentle lift in the shadows. Everything else is small, occasional adjustment, not a formula I apply to every frame. I've watched people spend twenty minutes per photo pulling a dozen different sliders around; I'm usually done in under three.",
      "Exposure gets adjusted first, almost always by a small amount, just enough to bring the frame back to how it actually felt standing there rather than how the meter happened to read it. Cameras still tend to slightly underexpose bright snow scenes and slightly overexpose dark forest ones, and a quick correction fixes most of that in one move.",
      "White balance is the slider I'm most protective of, because it's the easiest one to overcorrect. Auto white balance loves to strip out warmth, correcting golden light back toward a neutral grey that technically looks 'accurate' but completely misses the emotional point of why I took the photo in the first place.",
      "The shadow lift is subtle, just enough to bring back detail in a dark foreground without flattening the whole image. I avoid pushing it too far — some shadow should stay a shadow, or the photo starts to look artificially even, which is its own kind of unrealistic.",
      "I keep one preset as a starting point and nothing more. Every photo still gets looked at individually, because the light in Hunza and the light in Karachi are never asking for the same thing. A preset applied blindly across a whole gallery is usually obvious to anyone looking closely, and it flattens exactly the differences that made each location worth photographing separately.",
      "If you're building your own editing habits, resist the urge to chase every slider in the panel. Pick the two or three that matter most for your own style, learn exactly what each one does to your specific kind of photos, and leave the rest alone until you actually have a reason to touch them.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/editgal1/900/700", caption: "Before and after — exposure and white balance only." },
    ],
    quote: "A camera doesn't capture a place. It captures the version of yourself that showed up to see it.",
  },
  {
    id: 9,
    title: "The Villages Between the Views",
    slug: "villages-between-the-views",
    excerpt: "The parts of a trip nobody photographs — small tea stalls, quiet roads, and conversations that made the trip.",
    category: "Travel Diaries",
    location: "Gilgit-Baltistan, Pakistan",
    cover: "https://picsum.photos/seed/villagesview/1200/900",
    date: "2026-08-12",
    tilt: "-2deg",
    content: [
      "Everyone photographs the mountains. Fewer people photograph the small tea stall at the base of them, where the owner has been serving the same three things for twenty years and remembers every regular by name, even the ones who only pass through once a season.",
      "Some of my favorite frames from this trip aren't landscapes at all — they're a child's bicycle leaning against a wall, laundry drying against a blue door, an old man reading in the shade of a walnut tree. None of these would make it onto a typical 'top places to visit' list, and that's exactly why I keep photographing them.",
      "I've started slowing down deliberately in these smaller moments, because they're the parts of a trip that fade from memory first if I don't stop long enough to actually notice them. A mountain stays a mountain in memory for years; a specific doorway or a specific conversation with a stranger fades within weeks unless something — a photo, a note, a deliberate pause — anchors it.",
      "One afternoon I spent almost twenty minutes at a tiny general store buying nothing more than a bottle of water, just talking with the shopkeeper about how the village had changed over the decades he'd run the place. He didn't have much dramatic to say, but the ordinary details — which families had moved away, which had stayed, how the road had improved but the tourists hadn't changed much — stuck with me longer than most of the scenic viewpoints from that same trip.",
      "Villages between the big destinations often get treated as obstacles to drive through rather than places worth stopping in. I've started deliberately building in extra time for exactly these unplanned stops, because they consistently turn into some of the richest material in the whole journal, even when nothing particularly photogenic happens.",
      "This is also where most of the real conversations happen — not at the famous viewpoint where everyone's rushing to get their shot before the light changes, but at the roadside stall where there's genuinely nowhere else to be for the next twenty minutes, so people actually talk.",
      "If there's one habit I'd recommend to any traveler with a camera, it's this: budget time for the places between the places. The mountains will still be there in an hour. The specific conversation, the specific afternoon light on a specific doorway, might not repeat itself.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/villagegal1/900/700", caption: "The tea stall — same three things, twenty years running." },
      { src: "https://picsum.photos/seed/villagegal2/900/700", caption: "Laundry against a blue door." },
      { src: "https://picsum.photos/seed/villagegal3/900/700", caption: "Shade of a walnut tree, mid-afternoon." },
    ],
    quote: "I travel to notice things, and I photograph so I don't forget how they felt.",
  },
  {
    id: 10,
    title: "Naltar's Blue Lakes: Chasing a Colour",
    slug: "naltar-blue-lakes",
    excerpt: "A day spent looking for a very specific shade of blue — and finding it, three lakes and one wrong turn later.",
    category: "Gallery",
    location: "Naltar Valley, Pakistan",
    cover: "https://picsum.photos/seed/naltarblue/1200/900",
    date: "2026-08-20",
    tilt: "3deg",
    content: [
      "I'd seen one photo of Naltar's lakes online and spent the entire drive up wondering if the colour was real or heavily edited. It's real. If anything, the photos undersell it — no amount of saturation slider seems to fully capture that specific, almost unnatural shade of blue in person.",
      "The road up to Naltar is an experience of its own — narrow, winding, and lined with pine forest thick enough to block out most of the sky for long stretches at a time. It builds anticipation in a way that made the first glimpse of the lake color hit even harder than I expected.",
      "The first lake is the most accessible and, predictably, the busiest. We didn't linger long, mostly because the color at the second lake, further up the road, was reportedly even more striking, and curiosity got the better of patience.",
      "We took a wrong turn near the second lake and ended up on a quiet ridge that wasn't in any of the guides I'd read — which turned out to be where most of these photographs were taken. Sometimes the best viewpoints aren't the marked ones at all, just the ones you stumble onto by accident while trying to find your way back to the main road.",
      "From that unmarked ridge, the second lake spread out below in a blue that genuinely looked artificial, bordered by dark pine and pale rock in a combination that felt almost too perfectly composed to be natural. I took far more photos here than anywhere else on the trip, unable to quite believe the color was holding steady across every single frame.",
      "By the third lake, smaller and quieter than the first two, the crowds had thinned out almost entirely, and we had a long stretch of shoreline mostly to ourselves. It lacked the intensity of color the second lake had, but made up for it with a stillness that made for some of the best reflection shots of the whole day.",
      "If you're planning your own trip to Naltar, don't stop at the first lake just because it's the easiest to reach. The wrong turns and the further walks are exactly where this valley keeps its best surprises.",
    ],
    gallery: [
      { src: "https://picsum.photos/seed/naltargal1/900/700", caption: "The second lake — the colour is unedited." },
      { src: "https://picsum.photos/seed/naltargal2/900/700", caption: "The ridge we found by taking a wrong turn." },
    ],
    quote: "The best photographs are always the ones I almost didn't take.",
  },
];

export const explorePhotos = [
  { id: "e1", src: "https://picsum.photos/seed/explore1/900/1150", caption: "Hunza Valley, Pakistan", location: "Karimabad, Hunza", camera: "50mm · f/2.8 · 1/250s", story: "Taken from a rooftop just after sunrise, before the town had properly woken up." },
  { id: "e2", src: "https://picsum.photos/seed/explore2/900/650", caption: "Golden hour, Skardu", location: "Skardu, Pakistan", camera: "35mm · f/4 · 1/500s", story: "The Indus turns almost copper-coloured for about ten minutes every evening here." },
  { id: "e3", src: "https://picsum.photos/seed/explore3/900/1200", caption: "Attabad Lake reflections", location: "Attabad Lake, Hunza", camera: "24mm · f/8 · 1/125s", story: "Waited nearly forty minutes for the wind to die down enough for this reflection." },
  { id: "e4", src: "https://picsum.photos/seed/explore4/900/750", caption: "Swat Valley mornings", location: "Swat Valley, Pakistan", camera: "50mm · f/2 · 1/320s", story: "Mist rolling off the river on a solo morning walk near Mingora." },
  { id: "e5", src: "https://picsum.photos/seed/explore5/900/1100", caption: "Deosai Plains", location: "Deosai National Park", camera: "24mm · f/11 · 1/200s", story: "The sky here felt closer than anywhere else I've photographed." },
  { id: "e6", src: "https://picsum.photos/seed/explore6/900/700", caption: "Fairy Meadows sunrise", location: "Fairy Meadows", camera: "35mm · f/5.6 · 1/400s", story: "Nanga Parbat, about ninety seconds after the sun cleared the ridge." },
  { id: "e7", src: "https://picsum.photos/seed/explore7/900/1150", caption: "Karimabad rooftops", location: "Karimabad, Hunza", camera: "50mm · f/4 · 1/250s", story: "Late afternoon light on the old town, shot from the fort above it." },
  { id: "e8", src: "https://picsum.photos/seed/explore8/900/800", caption: "Naltar Valley, blue lakes", location: "Naltar Valley", camera: "24mm · f/9 · 1/160s", story: "That blue is unedited — the water really does look like this." },
  { id: "e9", src: "https://picsum.photos/seed/explore9/900/1000", caption: "Passu Cones at dusk", location: "Passu, Hunza", camera: "70mm · f/6.3 · 1/320s", story: "The cones catch the last light about twenty minutes before everything else goes dark." },
  { id: "e10", src: "https://picsum.photos/seed/explore10/900/700", caption: "Rakaposhi viewpoint", location: "Rakaposhi Viewpoint, Hunza", camera: "35mm · f/8 · 1/250s", story: "One of the few mountains you can photograph from a roadside dhaba." },
  { id: "e11", src: "https://picsum.photos/seed/explore11/900/1150", caption: "Shimshal, high altitude", location: "Shimshal Valley", camera: "24mm · f/10 · 1/200s", story: "A two-day jeep track to get here, and worth every hour of it." },
  { id: "e12", src: "https://picsum.photos/seed/explore12/900/900", caption: "Kachura Lake stillness", location: "Kachura Lake, Skardu", camera: "50mm · f/5 · 1/160s", story: "Early enough that I had the entire shoreline to myself." },
  { id: "e13", src: "https://picsum.photos/seed/explore13/900/1100", caption: "Village life, Gilgit-Baltistan", location: "Near Gilgit", camera: "85mm · f/2.8 · 1/500s", story: "A quiet street I wandered down looking for tea and found this instead." },
  { id: "e14", src: "https://picsum.photos/seed/explore14/900/750", caption: "Saif-ul-Malook mist", location: "Lake Saif-ul-Malook", camera: "35mm · f/7.1 · 1/200s", story: "Fog rolled in fast — this window lasted maybe five minutes." },
  { id: "e15", src: "https://picsum.photos/seed/explore15/900/1050", caption: "Old bazaar, Karimabad", location: "Karimabad, Hunza", camera: "50mm · f/2.5 · 1/320s", story: "Apricots drying on a rooftop, one of my favourite quiet frames from Hunza." },
  { id: "e16", src: "https://picsum.photos/seed/explore16/900/800", caption: "Road to Khunjerab", location: "Khunjerab Pass road", camera: "24mm · f/9 · 1/250s", story: "The road that keeps climbing long after you think it's done climbing." },
];

export const galleryStrip = [
  "https://picsum.photos/seed/strip1/600/700",
  "https://picsum.photos/seed/strip2/600/700",
  "https://picsum.photos/seed/strip3/600/700",
  "https://picsum.photos/seed/strip4/600/700",
  "https://picsum.photos/seed/strip5/600/700",
];

export const destinations = [
  { name: "Hunza Valley", slug: "four-days-in-hunza", image: "https://picsum.photos/seed/desthunza/700/850", country: "Pakistan", type: "Mountains", rating: 4.9, bestTime: "Apr – Oct", budget: "Mid-range" },
  { name: "Skardu", slug: "24-hours-in-skardu", image: "https://picsum.photos/seed/destskardu/700/850", country: "Pakistan", type: "Mountains", rating: 4.8, bestTime: "May – Sep", budget: "Mid-range" },
  { name: "Swat Valley", slug: "solo-in-swat", image: "https://picsum.photos/seed/destswat/700/850", country: "Pakistan", type: "Valleys", rating: 4.7, bestTime: "Mar – Oct", budget: "Budget" },
  { name: "Fairy Meadows", slug: "fairy-meadows-hike", image: "https://picsum.photos/seed/destfairy/700/850", country: "Pakistan", type: "Mountains", rating: 4.9, bestTime: "Jun – Sep", budget: "Budget" },
  { name: "Naltar Valley", slug: "naltar-blue-lakes", image: "https://picsum.photos/seed/destnaltar/700/850", country: "Pakistan", type: "Lakes", rating: 4.6, bestTime: "May – Sep", budget: "Mid-range" },
  { name: "Deosai Plains", slug: "24-hours-in-skardu", image: "https://picsum.photos/seed/destdeosai/700/850", country: "Pakistan", type: "Plains", rating: 4.8, bestTime: "Jun – Aug", budget: "Mid-range" },
];

// ---------------------------------------------------------------------------
// Enrichment data below — engagement stats, tags, and extra destination detail
// used by the Blog and Explore pages. Kept separate from the arrays above so
// the original hand-written entries stay untouched; merge into the API
// response once the backend is wired up.
// ---------------------------------------------------------------------------

const engagementBySlug = {
  "four-days-in-hunza": { author: "Adeen Fatima", readingTime: 6, views: 15420, likes: 892, tags: ["Hunza", "Travel", "Pakistan", "Valleys"] },
  "golden-hour-field-guide": { author: "Adeen Fatima", readingTime: 5, views: 21830, likes: 1340, tags: ["Photography", "Golden Hour", "Tips"] },
  "24-hours-in-skardu": { author: "Adeen Fatima", readingTime: 4, views: 9870, likes: 610, tags: ["Skardu", "Pakistan", "Photography"] },
  "whats-in-my-bag": { author: "Adeen Fatima", readingTime: 5, views: 18240, likes: 1105, tags: ["Photography", "Gear", "Tips"] },
  "solo-in-swat": { author: "Adeen Fatima", readingTime: 7, views: 24310, likes: 1782, tags: ["Solo Travel", "Swat", "Pakistan"] },
  "reflections-water-light": { author: "Adeen Fatima", readingTime: 4, views: 7650, likes: 455, tags: ["Photography", "Nature", "Gallery"] },
  "fairy-meadows-hike": { author: "Adeen Fatima", readingTime: 6, views: 19980, likes: 1523, tags: ["Adventure", "Fairy Meadows", "Pakistan"] },
  "editing-workflow-lightroom": { author: "Adeen Fatima", readingTime: 5, views: 13290, likes: 780, tags: ["Photography", "Editing", "Tips"] },
  "villages-between-the-views": { author: "Adeen Fatima", readingTime: 6, views: 8420, likes: 512, tags: ["Culture", "Travel", "Pakistan"] },
  "naltar-blue-lakes": { author: "Adeen Fatima", readingTime: 4, views: 11760, likes: 690, tags: ["Naltar", "Nature", "Pakistan"] },
};

samplePosts.forEach((post) => {
  Object.assign(post, engagementBySlug[post.slug] || { author: "Adeen Fatima", readingTime: 5, views: 5000, likes: 300, tags: [post.category] });
});

// Showcase categories for the Blogs page category grid — broader than the
// three functional filter categories above, mapped to a best-match keyword
// so clicking one filters the real posts sensibly.
export const blogCategories = [
  { name: "Adventure", icon: "bi-compass", keyword: "hike" },
  { name: "Photography", icon: "bi-camera", keyword: "photography" },
  { name: "Budget Travel", icon: "bi-wallet2", keyword: "budget" },
  { name: "Food", icon: "bi-cup-hot", keyword: "tea" },
  { name: "Culture", icon: "bi-people", keyword: "village" },
  { name: "Wildlife", icon: "bi-tree", keyword: "nature" },
  { name: "Solo Travel", icon: "bi-person-walking", keyword: "solo" },
  { name: "Family Travel", icon: "bi-house-heart", keyword: "valley" },
];

export const photographyTips = [
  { title: "Camera Settings", icon: "bi-sliders", summary: "Lower ISO, protected highlights, and the two settings Adeen changes before every shoot.", slug: "golden-hour-field-guide" },
  { title: "Golden Hour", icon: "bi-sunset", summary: "Why being in position twenty minutes early matters more than any setting.", slug: "golden-hour-field-guide" },
  { title: "Composition", icon: "bi-grid-3x3", summary: "Turning around, framing villages instead of just peaks, and other small habits.", slug: "villages-between-the-views" },
  { title: "Editing Tips", icon: "bi-magic", summary: "The three sliders Adeen actually uses — exposure, white balance, and shadows.", slug: "editing-workflow-lightroom" },
];

export const travelTips = [
  { title: "Budget Travel", icon: "bi-piggy-bank", summary: "Stretching a northern-Pakistan trip further without missing the good parts." },
  { title: "Safety", icon: "bi-shield-check", summary: "What solo travel through the valleys actually feels like, and how to prepare." },
  { title: "Packing", icon: "bi-bag-check", summary: "The short list that covers almost every trip north — see the checklist on Explore." },
  { title: "Visa Tips", icon: "bi-passport", summary: "Documents and permits worth sorting before you head toward the northern areas." },
];

export const popularTags = ["Hunza", "Nature", "Photography", "Travel", "Pakistan"];

// ---------------------------------------------------------------------------
// Destination detail data (Explore page)
// ---------------------------------------------------------------------------

const destinationDetailBySlug = {
  "four-days-in-hunza": {
    difficulty: "Easy",
    safety: 5,
    description: "A relaxed valley trip built around orchards, old bazaars, and Rakaposhi in every direction.",
    attractions: ["Attabad Lake", "Karimabad Old Bazaar", "Baltit Fort", "Rakaposhi Viewpoint"],
    food: [
      { name: "Hunza Apricot Cake", note: "A dense, lightly sweet cake sold across Karimabad's bakeries." },
      { name: "Chapshuro", note: "A local meat-filled flatbread, best eaten straight off the pan." },
      { name: "Cherry Juice", note: "Fresh-pressed and sold roadside through early summer." },
    ],
    hotels: [
      { name: "Hunza Serena Inn", tier: "Luxury", note: "Orchard views, walking distance from Baltit Fort." },
      { name: "Darbar Hotel Hunza", tier: "Mid-range", note: "Simple rooms with a Rakaposhi-facing terrace." },
      { name: "Karimabad Guesthouses", tier: "Budget", note: "Family-run rooms scattered through the old town." },
    ],
    photoSpots: { sunrise: "Duikar viewpoint, above Altit", sunset: "Attabad Lake shoreline", goldenHour: "Karimabad rooftops", droneAllowed: true, cameraTip: "Shoot Rakaposhi in the first hour of light before haze builds up." },
    timeline: [
      { day: 1, plan: "Arrive Karimabad, walk the old bazaar, settle in before dark." },
      { day: 2, plan: "Attabad Lake by boat, then apricot orchards on the walk back." },
      { day: 3, plan: "Baltit Fort in the morning, Duikar viewpoint for sunset." },
    ],
    weather: { condition: "Clear", high: 24, low: 11, icon: "bi-sun" },
  },
  "24-hours-in-skardu": {
    difficulty: "Easy",
    safety: 5,
    description: "A base for the wider Skardu region — the Indus, Shigar road, and Deosai beyond it.",
    attractions: ["Shangrila Resort", "Shigar Fort", "Kharpocho Fort", "Upper Kachura Lake"],
    food: [
      { name: "Balti Kebab", note: "Slow-cooked, mildly spiced — a Skardu specialty." },
      { name: "Apricot Soup", note: "A traditional Baltistan dish, served warm." },
    ],
    hotels: [
      { name: "Shangrila Resort", tier: "Luxury", note: "Set right on Lower Kachura Lake." },
      { name: "Skardu Continental", tier: "Mid-range", note: "Central, easy access to the bazaar." },
      { name: "Local Guesthouses", tier: "Budget", note: "Basic, friendly, and close to the airport road." },
    ],
    photoSpots: { sunrise: "Indus riverbank near the old bridge", sunset: "Kharpocho Fort ridge", goldenHour: "Road to Shigar", droneAllowed: true, cameraTip: "Get to the riverbank before the wind picks up mid-morning." },
    timeline: [
      { day: 1, plan: "Indus riverbank at sunrise, Kharpocho Fort by late morning." },
      { day: 2, plan: "Drive out toward Shigar, stop wherever the light asks you to." },
      { day: 3, plan: "Upper Kachura Lake, then Deosai Plains if the road is open." },
    ],
    weather: { condition: "Partly Cloudy", high: 21, low: 8, icon: "bi-cloud-sun" },
  },
  "solo-in-swat": {
    difficulty: "Easy",
    safety: 4,
    description: "A gentle valley well-suited to a first solo trip — rivers, forests, and generous guesthouses.",
    attractions: ["Malam Jabba", "Kalam Valley", "Mahodand Lake", "Marghazar Palace"],
    food: [
      { name: "Swati Chapli Kebab", note: "Spiced, pan-fried, sold at almost every roadside stop." },
      { name: "Trout", note: "Fresh from Kalam's rivers, usually grilled or fried." },
    ],
    hotels: [
      { name: "Swat Serena Hotel", tier: "Luxury", note: "Full-service, in Saidu Sharif." },
      { name: "Kalam Riverside Inn", tier: "Mid-range", note: "Rooms overlooking the river." },
      { name: "Mingora Guesthouses", tier: "Budget", note: "Simple, central, well-reviewed for solo travellers." },
    ],
    photoSpots: { sunrise: "Riverbank near Mingora", sunset: "Malam Jabba ridgeline", goldenHour: "Kalam Valley road", droneAllowed: false, cameraTip: "Mist rolls off the river early — be there before 6am." },
    timeline: [
      { day: 1, plan: "Settle into Mingora, walk without a real destination." },
      { day: 2, plan: "Drive up to Kalam, riverside most of the afternoon." },
      { day: 3, plan: "Mahodand Lake day trip, back by early evening." },
    ],
    weather: { condition: "Light Rain", high: 19, low: 12, icon: "bi-cloud-rain" },
  },
  "fairy-meadows-hike": {
    difficulty: "Hard",
    safety: 3,
    description: "A steep, high-altitude trek that ends with Nanga Parbat filling the entire skyline.",
    attractions: ["Nanga Parbat Base Camp Trail", "Fairy Meadows Viewpoint", "Beyal Camp"],
    food: [
      { name: "Camp-cooked Daal & Rice", note: "Simple, warm, and about all you'll want after the hike." },
      { name: "Local Walnuts", note: "Sold by villagers along the jeep track." },
    ],
    hotels: [
      { name: "Fairy Meadows Cottages", tier: "Mid-range", note: "Wooden cottages with a direct Nanga Parbat view." },
      { name: "Camping (BYO tent)", tier: "Budget", note: "Most common option; gear rental available in Raikot." },
    ],
    photoSpots: { sunrise: "Fairy Meadows main viewpoint", sunset: "Beyal Camp trail", goldenHour: "Meadow edge, facing Nanga Parbat", droneAllowed: false, cameraTip: "Sunrise turns the peak pink, then gold, in under ten minutes — be ready early." },
    timeline: [
      { day: 1, plan: "Jeep ride to Fairy Meadows drop-off, hike in, camp overnight." },
      { day: 2, plan: "Sunrise at the viewpoint, day hike toward Beyal Camp." },
      { day: 3, plan: "Early descent before the jeep track gets busy." },
    ],
    weather: { condition: "Cold, Clear", high: 14, low: 2, icon: "bi-snow" },
  },
  "naltar-blue-lakes": {
    difficulty: "Medium",
    safety: 4,
    description: "A quieter valley chasing one very specific shade of blue across three lakes.",
    attractions: ["Naltar Lakes", "Naltar Ski Resort", "Blue Lake Ridge"],
    food: [
      { name: "Wild Berries", note: "Sold in season by roadside stalls on the way up." },
      { name: "Local Trout", note: "Served fresh near the lake area." },
    ],
    hotels: [
      { name: "Naltar Valley Resort", tier: "Mid-range", note: "The main proper stay in the valley." },
      { name: "PTDC Motel Naltar", tier: "Budget", note: "Basic government-run rooms near the ski slope." },
    ],
    photoSpots: { sunrise: "First lake shoreline", sunset: "Blue Lake ridge", goldenHour: "Second lake", droneAllowed: true, cameraTip: "Go early — a rough road means fewer visitors and stiller water before noon." },
    timeline: [
      { day: 1, plan: "Drive up from Gilgit, first lake in the afternoon." },
      { day: 2, plan: "Second and third lakes, plus the ridge nobody photographs." },
    ],
    weather: { condition: "Clear", high: 18, low: 6, icon: "bi-sun" },
  },
};

export const destinationDetails = destinationDetailBySlug;

destinations.forEach((dest) => {
  const detail = destinationDetailBySlug[dest.slug];
  if (detail) Object.assign(dest, detail);
});

// Season heuristics for the "Best Time to Visit" section, derived from each
// destination's bestTime range.
export const seasonHighlights = {
  Spring: destinations.filter((d) => /Mar|Apr/.test(d.bestTime)).map((d) => d.name),
  Summer: destinations.filter((d) => /May|Jun|Jul|Aug/.test(d.bestTime)).map((d) => d.name),
  Winter: destinations.filter((d) => /Nov|Dec|Jan|Feb/.test(d.bestTime)),
};

// Estimated three-tier budget guide (PKR, per person, per day) shown on Explore.
export const budgetTiers = [
  { tier: "Budget Trip", icon: "bi-wallet2", range: "PKR 4,000 – 7,000 / day", includes: "Shared guesthouses, local food, public transport / shared jeeps." },
  { tier: "Standard Trip", icon: "bi-suitcase2", range: "PKR 8,000 – 15,000 / day", includes: "Mid-range hotels, mixed dining, private transport for day trips." },
  { tier: "Luxury Trip", icon: "bi-gem", range: "PKR 18,000+ / day", includes: "Resorts like Serena or Shangrila, private guide, full-day charters." },
];

// ---------------------------------------------------------------------------
// Visited Places Map data (Home page) — real coordinates across northern
// Pakistan and Kashmir. Places with a matching blog post link there directly;
// others link to the Travel Journal until a dedicated post exists.
// ---------------------------------------------------------------------------
export const visitedPlaces = [
  { name: "Hunza Valley", lat: 36.3167, lng: 74.6500, image: "https://picsum.photos/seed/vphunza/500/380", story: "Four days of orchards, old bazaars, and Rakaposhi in every direction.", link: "/post/four-days-in-hunza", linkLabel: "Read the story" },
  { name: "Balakot", lat: 34.5459, lng: 73.3505, image: "https://picsum.photos/seed/vpbalakot/500/380", story: "A quiet stopover on the way north — river views and mountain air.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Murree", lat: 33.9070, lng: 73.3943, image: "https://picsum.photos/seed/vpmurree/500/380", story: "Pine forests and the first proper hill-station chill of the year.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Nathia Gali", lat: 34.0667, lng: 73.3833, image: "https://picsum.photos/seed/vpnathiagali/500/380", story: "Foggy walking trails and the best cup of tea on the whole trip.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Ayubia", lat: 34.0500, lng: 73.4000, image: "https://picsum.photos/seed/vpayubia/500/380", story: "Chairlift views over the pine valley — quieter than Murree, just as green.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Kashmir (Muzaffarabad)", lat: 34.3700, lng: 73.4711, image: "https://picsum.photos/seed/vpkashmir/500/380", story: "Where the Neelum and Jhelum rivers meet — the start of the valley road.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Arang Kel", lat: 34.6330, lng: 73.9330, image: "https://picsum.photos/seed/vparangkel/500/380", story: "A chairlift and a short hike up to a meadow with no road access at all.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Sharda", lat: 34.7972, lng: 74.1758, image: "https://picsum.photos/seed/vpsharda/500/380", story: "Ancient ruins and the Neelum Valley's greenest stretch of river.", link: "/travel-journal", linkLabel: "See journal" },
  { name: "Babusar Top", lat: 35.2451, lng: 74.0397, image: "https://picsum.photos/seed/vpbabusar/500/380", story: "The pass connecting Kaghan to Chilas — snow even in July some years.", link: "/explore", linkLabel: "Explore nearby" },
];

// ---------------------------------------------------------------------------
// Home page extras
// ---------------------------------------------------------------------------
export const instagramFeed = [
  "https://picsum.photos/seed/ig1/500/500",
  "https://picsum.photos/seed/ig2/500/500",
  "https://picsum.photos/seed/ig3/500/500",
  "https://picsum.photos/seed/ig4/500/500",
  "https://picsum.photos/seed/ig5/500/500",
  "https://picsum.photos/seed/ig6/500/500",
];

export const featuredPhotoOfWeek = {
  src: "https://picsum.photos/seed/photoweek/1400/900",
  title: "Attabad Lake at First Light",
  location: "Attabad Lake, Hunza",
  camera: "24mm · f/8 · 1/125s",
  story: "Forty minutes of waiting for the wind to drop, for the water to turn into a mirror.",
};

export const partners = [
  { name: "Pakistan Tourism Board", icon: "bi-flag" },
  { name: "Northern Areas Guides", icon: "bi-compass" },
  { name: "TravelPK Magazine", icon: "bi-journal-bookmark" },
  { name: "Hunza Photography Club", icon: "bi-camera" },
];

// ---------------------------------------------------------------------------
// Blog page extras
// ---------------------------------------------------------------------------
export const featuredSeries = [
  { name: "Pakistan Diaries", icon: "bi-book", keyword: "pakistan", cover: "https://picsum.photos/seed/seriespk/700/500" },
  { name: "Northern Pakistan", icon: "bi-snow2", keyword: "hunza", cover: "https://picsum.photos/seed/seriesnorth/700/500" },
  { name: "Photography School", icon: "bi-camera", keyword: "photography", cover: "https://picsum.photos/seed/seriesschool/700/500" },
  { name: "Travel Hacks", icon: "bi-lightbulb", keyword: "budget", cover: "https://picsum.photos/seed/serieshacks/700/500" },
];

const shareCountBySlug = {
  "four-days-in-hunza": 412, "golden-hour-field-guide": 587, "24-hours-in-skardu": 233,
  "whats-in-my-bag": 501, "solo-in-swat": 764, "reflections-water-light": 198,
  "fairy-meadows-hike": 690, "editing-workflow-lightroom": 340, "villages-between-the-views": 221,
  "naltar-blue-lakes": 289,
};
samplePosts.forEach((post) => {
  post.shares = shareCountBySlug[post.slug] || 150;
});

// ---------------------------------------------------------------------------
// Explore page extras
// ---------------------------------------------------------------------------
export const nearbyPlacesBySlug = {
  "four-days-in-hunza": ["Attabad Lake", "Passu Cones", "Khunjerab Pass"],
  "24-hours-in-skardu": ["Shigar Fort", "Upper Kachura Lake", "Deosai Plains"],
  "solo-in-swat": ["Kalam Valley", "Mahodand Lake", "Malam Jabba"],
  "fairy-meadows-hike": ["Nanga Parbat Base Camp", "Raikot Bridge", "Tato Village"],
  "naltar-blue-lakes": ["Naltar Ski Resort", "Blue Lake Ridge", "Gilgit City"],
};

export const routeInfo = {
  title: "Islamabad to Hunza",
  steps: ["Islamabad", "Mansehra", "Balakot", "Babusar Top", "Chilas", "Hunza"],
};

export const distanceTable = [
  { from: "Islamabad", to: "Hunza", distance: "650 km", duration: "~14 hrs by road" },
  { from: "Islamabad", to: "Skardu", distance: "720 km", duration: "~16 hrs by road" },
  { from: "Islamabad", to: "Swat", distance: "260 km", duration: "~5 hrs by road" },
  { from: "Islamabad", to: "Fairy Meadows", distance: "580 km", duration: "~13 hrs + jeep + hike" },
  { from: "Islamabad", to: "Naltar Valley", distance: "660 km", duration: "~14 hrs + jeep" },
];

export const localCulture = {
  language: "Urdu is understood everywhere; Burushaski, Balti, and Pashto are common locally in the north.",
  dress: "Modest, weather-appropriate clothing — a warm shawl or jacket works well for both culture and cold.",
  customs: "Ask before photographing people directly; tea is often offered as a genuine welcome, not a sales pitch.",
};

export const emergencyContacts = [
  { label: "Hospital", number: "1122", icon: "bi-hospital" },
  { label: "Police", number: "15", icon: "bi-shield-check" },
  { label: "Tourist Help Line", number: "1422", icon: "bi-life-preserver" },
];

export const thingsToAvoid = [
  "Don't litter — pack out what you bring in, especially in Fairy Meadows and Naltar.",
  "Avoid night travel on mountain roads; landslides and poor visibility are common after dark.",
  "Don't photograph military checkpoints or installations.",
  "Avoid drinking untreated stream water without filtering or boiling first.",
];

// ---------------------------------------------------------------------------
// Reader Questions — a small FAQ used only on the Blog page (distinct from
// the Photography Tips block, which now lives only on the Gallery page).
// ---------------------------------------------------------------------------

export const readerQuestions = [
  {
    question: "How do you plan a trip before you go?",
    answer: "Loosely. I pick a region and a rough number of days, then leave most days open — the best stops on this blog were never on the original plan.",
  },
  {
    question: "Do you travel with a group or solo?",
    answer: "Mostly with family, occasionally solo. Both show up in this blog — the Swat trip was solo, most of the Kaghan and Kashmir entries were with mama, baba, and my brother.",
  },
  {
    question: "What's the one thing you always pack?",
    answer: "A thermos and a spare battery kept somewhere warm. Cold drains batteries fast at altitude, and a hot cup of chai has saved more mornings than I can count.",
  },
  {
    question: "How do you decide what to write about after a trip?",
    answer: "Whatever I keep thinking about a week later. If a moment is still in my head after the trip ends, it usually becomes the center of the post.",
  },
];
