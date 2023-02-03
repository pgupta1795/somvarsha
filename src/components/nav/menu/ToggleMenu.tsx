import { useDispatch, useSelector } from 'react-redux';
import { isMenuOpen, setMenu } from '../../../features/menu/mobileMenuSlice';

const ToggleMenu = () => {
  const isOpen = useSelector(isMenuOpen);
  const dispatch = useDispatch();

  const openMobileMenu = () => {
    dispatch(setMenu(!isOpen));
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.toggle('hidden');
    mobileMenu?.classList.toggle('flex');
  };

  return (
    <div role="button" className="text-3xl md:hidden focus:outline-none">
      {/* <div className="absolute top-7 max-md:right-2 h-1 w-6 rounded dark:bg-black bg-white transition-all duration-500 before:absolute before:h-1 before:w-6 before:-translate-x-4 before:-translate-y-3 before:rounded before:dark:bg-black before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-6 after:-translate-x-4 after:translate-y-3 after:rounded after:dark:bg-black after:bg-white  after:transition-all after:duration-500 after:content-['']" /> */}
      <label
        htmlFor="check"
        className="absolute top-5 max-md:right-2 flex flex-col gap-1 h-8 w-8 transition-all duration-500 cursor-pointer"
      >
        <input
          type="checkbox"
          id="check"
          className="hidden"
          onClick={openMobileMenu}
        />
        <span className="line h-1 w-1/2 bg-secondary rounded-xl ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] duration-300" />
        <span className="line h-1 w-full bg-secondary rounded-xl ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] duration-300" />
        <span className="line h-1 w-3/4 bg-secondary rounded-xl ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)] duration-300" />
      </label>
    </div>
  );
};

export default ToggleMenu;
