/* ================= EDIT YOUR VIDEOS HERE =================
   This one file feeds BOTH pages: index.html and work.html.
   One line = one video. Copy a line to add a video, delete a line to remove one.
   title : the name shown on the card
   kind  : the category shown under the carousel / under the film (e.g. 'Brand ad')
   dur   : the length shown on the card, as 'minutes:seconds'
   role  : (short-form only) what you did on it, shown under the carousel
   src   : the video link, in quotes. Either a file in the same folder ('videos/aurora.mp4')
           or a direct .mp4 link from your video host. Leave '' to show the colored placeholder.
   poster: (optional) thumbnail picture shown before the video plays, e.g. 'thumbs/aurora.jpg' or a full
           https link. Leave '' and the site shows the first frame of the video instead.
   hue   : placeholder color (0-360), only used while src and poster are empty
   sample: no longer used, safe to ignore
   Keep the commas between lines and the quotes around text.
   ========================================================== */
window.SHORTS = [
  { title: 'Aurora Sneaker Drop',          kind: 'Product launch', dur: '0:28', hue: 24,  role: 'Edit · sound design · captions',      poster: '', src: '', sample: true },
  { title: 'Night Market Diaries',         kind: 'Travel reel',    dur: '0:41', hue: 340, role: 'Edit · color · speed ramps',          poster: '', src: '', sample: true },
  { title: 'Ep. 112 Cold Open',            kind: 'Podcast clip',   dur: '0:52', hue: 210, role: 'Edit · captions · audio cleanup',     poster: '', src: '', sample: true },
  { title: 'Bloom Skincare Spot',          kind: 'Brand ad',       dur: '0:15', hue: 150, role: 'Edit · motion titles · color',        poster: '', src: '', sample: true },
  { title: 'Static Hearts Teaser',         kind: 'Music promo',    dur: '0:30', hue: 285, role: 'Edit · beat-synced cuts · VFX',       poster: '', src: '', sample: true },
  { title: 'Three Mistakes Founders Make', kind: 'Talking head',   dur: '0:47', hue: 48,  role: 'Edit · hooks · b-roll',               poster: '', src: '', sample: true },
  { title: 'Summit 2026 Recap',            kind: 'Event recap',    dur: '0:59', hue: 190, role: 'Edit · multicam · color',             poster: '', src: '', sample: true },
  { title: 'Street Food in 30 Seconds',    kind: 'Food reel',      dur: '0:30', hue: 8,   role: 'Edit · sound design · speed ramps',   poster: '', src: '', sample: true },
  { title: 'Desk Setup Tour',              kind: 'Creator content',dur: '0:44', hue: 120, role: 'Edit · captions · b-roll',            poster: '', src: '', sample: true },
  { title: 'Gym Launch Promo',             kind: 'Brand ad',       dur: '0:20', hue: 255, role: 'Edit · beat-synced cuts · titles',    poster: '', src: '', sample: true }
];
window.FILMS = [
  { title: 'Behind the Brand: Aurora', kind: 'Brand film',  dur: '4:12',  hue: 24,  poster: '', src: '', sample: true },
  { title: 'The Founder Interview',    kind: 'Interview',   dur: '11:36', hue: 210, poster: '', src: '', sample: true },
  { title: 'Cairo After Dark',         kind: 'Documentary', dur: '7:48',  hue: 300, poster: '', src: '', sample: true }
];
