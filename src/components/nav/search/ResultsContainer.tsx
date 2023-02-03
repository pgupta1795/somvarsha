import Results from './Results';

const ResultsContainer = () => (
  <ul
    className="bg-slate-50 max-h-[18.375rem] divide-y divide-slate-200 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm leading-6"
    role="listbox"
  >
    <Results />
    <Results />
  </ul>
);

export default ResultsContainer;
