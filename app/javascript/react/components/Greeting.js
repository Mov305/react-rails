import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { featchGreeting } from '../redux/reducers/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  React.useEffect(() => {
    dispatch(featchGreeting());
  }, [dispatch]);

  if (greeting.status === 'loading') {
    return <div>Loading...</div>;
  }

  console.log(greeting);

  return (
    <div>
      <h1>{greeting.greeting.text}</h1>
    </div>
  );
};

export default Greeting;
