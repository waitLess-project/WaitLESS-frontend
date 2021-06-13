const size = {
  mobile: "425px",
  tablet: "786px",
  laptop: "1024px",
  desktop: "2560px",
};

export const device = {
  mobileMax: `(max-width: ${size.mobile})`,
  tablet: `screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  laptop: `only screen and (min-device-width: ${size.tablet}) and (max-device-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
