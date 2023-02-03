const CloseSearch = () => (
  <button
    type="button"
    className=" text-6xl absolute top-16 right-[10%] m-auto text-slate-50"
    onClick={() => {
      const searchModal = document.getElementById('search-modal');
      searchModal?.classList.toggle('hidden');
      searchModal?.classList.toggle('flex');
    }}
    title="Close Overlay"
  >
    ×
  </button>
);

export default CloseSearch;
