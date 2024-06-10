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

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }

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

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
}

*,
*::after,
*::before {
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
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

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-cyan-600);
  outline-offset: -1px;
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
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
