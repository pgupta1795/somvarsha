import Children from '../../interfaces/Children';

const Container = ({ children }: Children) => (
  <main className="max-w-7xl mx-auto p-4">{children}</main>
);

export default Container;
