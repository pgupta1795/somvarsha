import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: React.ReactNode;
  id: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ name, id, className }: NavLinkProps) => {
  useEffect(() => {
    const url = window.location.href.split('/');
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleClick = () => {
    const hero = document.getElementById(id);
    hero?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Link to={`/#${id}`} className={className} onClick={handleClick}>
      {name}
    </Link>
  );
};

NavLink.defaultProps = {
  className: 'hover:opacity-50',
};

export default NavLink;
