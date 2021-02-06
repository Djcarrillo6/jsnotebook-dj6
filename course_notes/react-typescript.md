# React & Typescript

To create a React app with the Typescript template, use the command: `npx create-react-app <appName> --template typescript`

# TS & Props

- Whenever I plan to pass props from a parent component to a child component, we will utilize an "interface", build inside the CHILD component, to define what props the CHILD compoenent expects to receive.
- Utilizing interfaces to serve a prop gatekeepers to both the PARENT & CHILD compoenent provides 2 primary benefits:
  1. TS can ensure that the correct props are provided to the CHILD, when we show it inside the PARENT component.
     2.TS can also ensure that the props are BOTH correctly names and typed in the CHILD compoenent.

# Explicit Component Type Annotations

**_Methods of associating a props interface with a React component_**

- React Function Component Method #1:

  - Destructing of the 'color' prop we need from the ChildProp interface

  export const Child = ({ color }: ChildProps) => {
  return <div>
  {color}
    </div>;
  };

- React Functional Component Method #2:

  - When we want TS to allow the default React Functional Compoenent Properties, use this declaration style.

  export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>
  };
