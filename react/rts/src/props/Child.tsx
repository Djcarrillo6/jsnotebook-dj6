
// This interface will define the props the Child compoenent is expected to receive. 
interface ChildProps {
  color: string;
  onClick: () => void;
};

// React Function Component Method #1
// Destructing of the 'color' prop we need from the ChildProp interface
export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
   {color}
   <button onClick={onClick} ></button>
  </div>;
};

// React Functional Component Method #2
// When we want TS to allow the default React Functional Compoenent Properties, use this declaration style. 
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>{color}
   <button onClick={onClick} ></button>
  </div>
};