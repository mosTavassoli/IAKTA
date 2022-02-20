const screenSizes = {
  // mobileS: '320px',
  // mobileM: '375px',
  // mobileL: '425px',
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  // laptopL: '1440px',
  // desktop: '2560px',
};

export const deviceSizes = {
  // mobileS: `(min-width: ${sizes.mobileS})`,
  // mobileM: `(min-width: ${sizes.mobileM})`,
  mobile: `(max-width: ${screenSizes.mobile})`,
  tablet: `(max-width: ${screenSizes.tablet}) and (min-width: ${screenSizes.mobile})`,
  laptop: `(max-width: ${screenSizes.laptop}) and (min-width: ${screenSizes.tablet})`,
  // laptopL: `(min-width: ${sizes.laptopL})`,
  // desktop: `(min-width: ${sizes.desktop})`,
};

// @media ${deviceSizes.mobile}{
// styles
// }
