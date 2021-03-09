export const media = {
  mobile: (...args) => {
    /* Small devices (portrait tablets and large phones, 600px and up) */
    return `@media only screen (max-width: 600px) {
            ${args};
        }`;
  },
  tablet: (...args) => {
    /* Medium devices (landscape tablets, 768px and up) */
    return `@media only screen (max-width: 768px) {
            ${args};
        }`;
  },
  laptop: (...args) => {
    /* Large devices (laptops/desktops, 992px and up) */
    return `@media only screen (max-width: 992px) {
            ${args};
        }`;
  },
  desktop: (...args) => {
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    return `@media only screen (max-width:1200px) {
            ${args};
        }`;
  },
};
