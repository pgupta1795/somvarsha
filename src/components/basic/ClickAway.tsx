import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  Ref,
  useEffect,
  useRef,
} from 'react';

interface Children
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
}

const ClickAway = ({ children, onClickAway, ...rest }: Children) => {
  const ref: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLDivElement)) {
        onClickAway(e);
      }
    };

    document.addEventListener('click', handleClickAway);

    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  });

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

export default ClickAway;
