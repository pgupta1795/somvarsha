/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { rotate } from '../../helper/Motion';
import { SelectOption, SelectProps } from '../../interfaces/SelectProps';
import Button from '../basic/Button';
import Arrow from './Arrow';
import DividerVertical from './DividerVertical';
import Dropdown from './Dropdown';

const Select = ({ value, options, onChange, multiple }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isOptionSelected = (option: SelectOption) => {
    if (!multiple) return option === value;
    if (value.find((e) => option.label === e.label && option.value === e.value))
      return true;
    return false;
  };

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      value.includes(option)
        ? onChange(value.filter((o) => o !== option))
        : onChange([...value, option]);
    } else if (option !== value) {
      onChange(option);
    }
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape':
        default:
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options]);

  const handleSelectOption = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: SelectOption
  ): void => {
    e.stopPropagation();
    selectOption(option);
    setIsOpen(false);
  };

  const clearOption = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    multiple ? onChange([]) : onChange(undefined);
  };

  const fieldValue = multiple
    ? value?.map((v) => (
        <Button
          key={v.value}
          onClick={(e) => {
            e.stopPropagation();
            selectOption(v);
          }}
          className="group flex items-center rounded-lg gap-1 border-2 border-gray-light px-1 cursor-pointer outline-none bg-primary-light hover:border-primary"
        >
          {v.label}
          <span className="text-gray-light text-lg group-focus:text-primary-dark group-hover:text-primary-dark">
            &times;
          </span>
        </Button>
      ))
    : value?.label;

  return (
    <div
      ref={containerRef}
      role="presentation"
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className="text-sm relative w-full max-w-[10rem] sm:max-w-xs min-h-[1.5em] flex items-center gap-2 outline-none focus:border-secondary border-2 border-gray-light bg-slate-50 p-2 leading-tight rounded-lg"
    >
      <span className="flex-grow flex flex-wrap gap-2">{fieldValue}</span>
      <motion.button
        initial="rest"
        whileHover="hover"
        variants={rotate}
        type="button"
        className="cursor-pointer bg-none border-none font-bold text-primary p-0 text-lg focus:text-primary-dark hover:text-primary-dark"
        onClick={clearOption}
      >
        &times;
      </motion.button>
      <DividerVertical />
      <Arrow />
      <Dropdown
        isOpen={isOpen}
        options={options}
        isOptionSelected={isOptionSelected}
        handleSelectOption={handleSelectOption}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
      />
    </div>
  );
};

export default Select;
