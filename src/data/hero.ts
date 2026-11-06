import banner from '../assets/IMG_0071.png';

// A separate portrait/tablet banner can be imported here later.
// Until then, every device uses the supplied Upscayl image without cropping its text.
export const heroImages = {
  desktop: banner,
  tablet: banner,
  mobile: banner,
};

export const heroImageWidths = {
  desktop: [1280, 1600, 1920, 2424],
  tablet: [768, 1024, 1280, 1600, 2048],
  mobile: [480, 640, 800, 960, 1280],
};
