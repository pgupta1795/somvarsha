import Children from '../../../../interfaces/Children';

interface SectionContainerInterface extends Children {
  id: string;
  name: string;
}

const SectionContainer = ({
  id,
  name,
  children,
}: SectionContainerInterface) => (
  <section id={id} className="p-6 scroll-mt-10 mb-8">
    <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6">{name}</h2>
    {children}
  </section>
);

export default SectionContainer;
