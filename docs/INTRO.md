# CMAX Front end - Introduction

## What is CMAX?

CMAX is a information system for Chinese Medical Content within algorithm can help you find the right Chinese Medical Clinic.
And why we call it CMAX, which is a name of Chinese Medical App X.
The Algorithm also are CMAX, named Classification Machine with Accurate eXpectations.

## CMAX Front end

CMAX Front end is a web application for CMAX, which is a SPA (Single Page Application) with SveletKit.
There are the structure of CMAX Front-end
<img width="1315" alt="CMAX Frontend" src="https://github.com/CMUH-CMAX/the_cmax_frontend/assets/20425883/8b63aaf6-7215-4b7d-9f3f-b6260b4a8011">

- CMAX Front-end
  - Resoruce
    - src
      - lib (dynamic assets)
      - routes (pages)
  - Design
    - Pages
      - Login
      - Register
      - Home
      - Notification
      - Profile
      - Search
        - Body
        - Symptoms
        - Result
      - Profile
    - Components
      - navbar
      - Headerbar
        - info
        - search
      - Buttons
        - Gender Switch
      - Animations
      - Herosicon
      - Colors
  - DevKits
    - ESLint
    - Prettier
    - Playwright
    - Vitest
  - Librarys
    - Tailwindcss

Note:
- Design -> Page -> Profile rename to [Settings -> Profile]

The Design Assets can put it on [static](./static)
