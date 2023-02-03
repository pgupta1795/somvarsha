import BlurBackground from '../../animation/BlurBackground';
import ResultsContainer from './ResultsContainer';
import CloseSearch from './SearchCloseButton';
import SearchInputField from './SearchInputField';

const SearchModal = () => (
  <div
    id="search-modal"
    role="dialog"
    className="hidden w-full h-full top-0 left-0 right-0 z-50 animate-open-menu origin-top md:fixed inset-0 absolute overflow-hidden"
  >
    <BlurBackground />
    <CloseSearch />
    <div className="max-w-xs md:max-w-lg m-auto mt-8 text-center top-1/4 right-[10%] left-[10%] absolute transform transition-all opacity-100 scale-100">
      <form>
        <SearchInputField />
        <ResultsContainer />
      </form>
    </div>
  </div>
);

export default SearchModal;
