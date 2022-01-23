import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvider';
import Logout from '../Auth/Logout';

const MainNavigation = () => {
  const auth = useAuth();

  return (
    <header>
      <Link to='/'>
        <div>React Auth Template</div>
      </Link>
      <nav>
        <ul>
          { auth.userIsLoggedIn ? 
            (
              <>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <Logout />
                </li>
              </>
            ) :
            (
              <>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
