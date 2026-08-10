Put this trip's photos here:
  - cover.jpg        -> used as journeys.js "cover" for slug "kawai"
  - photo-1.jpg, photo-2.jpg, ... -> used inside its "gallery" array

Then in src/data/journeys.js, find the entry with slug: "kawai"
and replace the picsum.photos URL with: /images/journal/kawai/cover.jpg
(and /images/journal/kawai/photo-1.jpg for gallery photos)
