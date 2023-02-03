import { Search } from '@mui/icons-material';

const SearchInputField = () => (
  <div className="overflow-hidden rounded-t-lg bg-slate-50 shadow-md">
    <div className="relative">
      <input
        className="font-poppins block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
        placeholder="Search Funds..."
        type="text"
      />
      <Search className="pointer-events-none absolute top-4 right-4 h-6 w-6 fill-slate-400" />
    </div>
  </div>
);

export default SearchInputField;
