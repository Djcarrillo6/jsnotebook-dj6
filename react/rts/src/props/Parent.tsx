import { ChildAsFC} from './Child';

const Parent = () => {
  return <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
    Random props 
  </ChildAsFC>
};
export default Parent;

