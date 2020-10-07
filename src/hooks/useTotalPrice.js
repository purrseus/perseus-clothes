import { useSelector } from 'react-redux';

const useTotalPrice = () => {
  const bagState = useSelector(state => state.bag);
  return bagState.reduce((acc, cur) => {
    return acc + cur.quantity * (cur.price + 0.9);
  }, 0);
};

export default useTotalPrice;
