import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  &,
  &.light-mode {
    --color-cyan-0: #ffffff;
    --color-cyan-50: #edf4f4;
    --color-cyan-100: #cbdfef;
    --color-cyan-200: #aac4dd;
    --color-cyan-300: #99b6d6;
    --color-cyan-400: #88a8c8;
    --color-cyan-500: #779abe;
    --color-cyan-600: #6688ac;
    --color-cyan-700: #557191;
    --color-cyan-800: #446180;
    --color-cyan-900: #334b63;
    --color-cyan-950: #223243;

    --color-blue-100: #90d3ff;
    --color-blue-700: #0369a1;
    --color-green-100: #8dffb5;
    --color-green-700: #15803d;
    --color-yellow-100: #fff79e;
    --color-yellow-700: #fff200;
    --color-silver-100: #c8ccd3;
    --color-silver-700: #374151;
    --color-indigo-100: #938be2;
    --color-indigo-700: #4338ca;
    --color-red-100: #f17c7c;
    --color-red-700: #b91c1c;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 20%;
    --image-opacity: 90%;
  }

  &,
  &.dark-mode {
    --color-cyan-0: #1e2c3a;
    --color-cyan-50: #223243;
    --color-cyan-100: #334b63;
    --color-cyan-200: #446180;
    --color-cyan-300: #557191;
    --color-cyan-400: #6688ac;
    --color-cyan-500: #779abe;
    --color-cyan-600: #88a8c8;
    --color-cyan-700: #99b6d6;
    --color-cyan-800: #aac4dd;
    --color-cyan-900: #cbdfef;
    --color-cyan-950: #edf4f4;

    --color-blue-100: #0369a1;
    --color-blue-700: #90d3ff;
    --color-green-100: #15803d;
    --color-green-700: #8dffb5;
    --color-yellow-100: #fff200;
    --color-yellow-700: #fff79e;
    --color-silver-100: #374151;
    --color-silver-700: #c8ccd3;
    --color-indigo-100: #4338ca;
    --color-indigo-700: #938be2;
    --color-red-100: #b91c1c;
    --color-red-700: #f17c7c;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 20%;
    --image-opacity: 70%;
  }
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s, border 0.3s;
}

@media screen and (max-width: 576px) {
  html {
    font-size: 50%
  }
}

@media screen and (min-width: 576px) and (max-width: 768px) {
  html {
    font-size: 55%
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  html {
    font-size: 62.5%
  }
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
  html {
    font-size: 65%
  }
}

@media screen and (min-width: 1200px) {
  html {
    font-size: 67.5%
  }
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-cyan-200);
  color: var(--color-cyan-500);
}

a {
  outline: none;
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-cyan-500);
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
