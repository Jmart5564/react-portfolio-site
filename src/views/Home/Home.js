import { NavLink } from 'react-router-dom';


export default function Home() {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  const reload = async () => {
    await delay(10);
    location.reload();
  };

  return (
    <div>
      <h1>This is Home</h1>
      <p>Checkout my site {' '}
        <NavLink to="/about" onClick={reload}>here</NavLink>
      </p>
    </div>
  );
}