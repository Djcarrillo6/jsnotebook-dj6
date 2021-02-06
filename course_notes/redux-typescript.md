# Redux & Typescript

- When using Typescript in a Redux project, it is best practice to map out the design of the Redux store that will required!
- When designing the folder structure of a TS-Redux app, it is best practice to designate the entry point for the application as the `index.tsx` file:
  - Components will reach into the index.tsx file when they need to access Redux store objects, instead of reaching directly into the Redux store directory itself.
-
