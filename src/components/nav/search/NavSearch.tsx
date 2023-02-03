import Search from '../../icons/Search';

const NavSearch = () => (
  <div className="sm:mt-1">
    <button
      type="button"
      className="rounded-lg hover:opacity-50"
      onClick={() => {
        const searchModal = document.getElementById('search-modal');
        searchModal?.classList.toggle('hidden');
        searchModal?.classList.toggle('block');
      }}
    >
      <Search />
    </button>
  </div>
);

export default NavSearch;
