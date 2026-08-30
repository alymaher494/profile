Drop a background track here named `loop.mp3` (or set NEXT_PUBLIC_AUDIO_SRC
in .env.local to a custom path).

This is now the SITE'S MUSIC — the nav "Music" button plays/pauses this file
(no Spotify). It must be same-origin (served from /public) so the browser's
Web Audio API can analyse it.

When playing, the hero Oscilloscope reacts to the REAL audio. If no file is
present, the Oscilloscope falls back to a time-based techno waveform and the
Music button simply won't produce sound until you add the file.

Use a royalty-free / properly licensed track (e.g. a trance or techno loop).
