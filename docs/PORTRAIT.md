# About portrait

- Added at Miguel's request on 2026-10-14.
- Input: the portrait attached in the conversation. The supplied source remains unchanged, with an additional local backup under ignored `work/miguel-portrait-original.png`.
- Edit method: built-in imagegen, identity-preserve edit. Requested a closer portrait crop and a softer, less bright park background.
- Selected output copied into `src/assets/miguel-portrait-edited.png`; the site does not depend on a temporary file or the generated-image directory.
- Astro generates responsive AVIF/WebP derivatives. The portrait is lazy-loaded, has explicit dimensions and descriptive alternative text.
- This photo is used in About; project screenshots remain the focus of Selected work.

## Final edit prompt

```text
Use case: identity-preserve.
Asset type: natural photographic portrait for the About section of Miguel Carretero's personal portfolio.
Input image: the supplied photo is the edit target, not a style reference.
Primary request: make a subtle crop and background-only refinement of this exact photograph. Crop to a vertical 4:5 head-and-shoulders/upper-chest portrait, reducing the excessive space above the hair and trimming some lower torso. Keep the full hairstyle with a small comfortable margin, both shoulders and the existing relaxed pose.
Background: preserve the same outdoor park with trees and greenery. Gently increase background defocus and reduce the brightness/prominence of the white buildings and bright patches. Keep realistic soft natural daylight and the existing muted green/beige colors.
Critical invariants: preserve the person's exact identity, facial proportions, eyes, eyebrows, nose, lips, expression, skin texture, skin tone, hair, clothing, collar and sweater. Do not beautify, smooth skin, reshape facial features, change age, add a smile, relight the face, repaint the person or invent details. Make the smallest possible edit; only crop and subtly soften/mute the background. No text, watermark, stylization, vignetting or artificial studio backdrop. Photorealistic result.
```
