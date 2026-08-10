Put this trip's photos here:
  - cover.jpg        -> used as journeys.js "cover" for slug "loc"
  - photo-1.jpg, photo-2.jpg, ... -> used inside its "gallery" array

Then in src/data/journeys.js, find the entry with slug: "loc"
and replace the picsum.photos URL with: /images/journal/loc/cover.jpg
(and /images/journal/loc/photo-1.jpg for gallery photos)
