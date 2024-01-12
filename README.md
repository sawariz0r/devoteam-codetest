# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
It's also using React Three Fiber and Zustand.
Cypress for E2E tests.

I committed at the actual starting point in order to have a time reference, and updated this README to signal the end. (written 17:28)

## Running the project

In order to run the application and the E2E tests, you'll have to keep the vite client running with `npm run dev`.
Then you can run `npm run cypress:e2e` to run the E2E-tests.

## Thoughts

I had an initial idea of how I wanted this to work, visualizing the movement with a cube with animated rolling and rotating.
This was tested using keyboard controls (hence why they're still in the project), but I wasn't entirely happy with it and decided to focus on the functionality end of things.

It's a take on the instructions and I took the liberty of making some requirements optional/nice to haves.
Would've implemented these if I had the time. (5x5 room constraint). 

The `starting position` is set in the `<Experience>`.

I also didn't include any tests other than E2E due to time constraints.
(And I purposefully didn't use CoPilot for this test, would've really sped things up and nowadays consider it an essential part of my IDE)

