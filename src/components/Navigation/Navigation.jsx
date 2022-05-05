import { useContext } from 'react';
import favContext from '../../contexts/context';
import { SiteNav, SiteNavLink, SiteNavItem } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useContext(favContext);
  return (
    <nav>
      <SiteNav>
        <SiteNavItem>
          <SiteNavLink to="/">Home</SiteNavLink>
        </SiteNavItem>

        {isLoggedIn && (
          <SiteNavItem>
            <SiteNavLink to="/characters">All characters </SiteNavLink>
          </SiteNavItem>
        )}

        {isLoggedIn && (
          <SiteNavItem>
            <SiteNavLink to="/findCharacter">Find character </SiteNavLink>
          </SiteNavItem>
        )}

        {isLoggedIn && (
          <SiteNavItem>
            <SiteNavLink to="/favorite">Favorite</SiteNavLink>
          </SiteNavItem>
        )}
      </SiteNav>
    </nav>
  );
}
