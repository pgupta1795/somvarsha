import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import { slideVerticalAnimation } from '../../helper/Motion';
import { SelectOption } from '../../interfaces/SelectProps';

interface DropdownProps {
  isOpen: boolean;
  options: SelectOption[];
  isOptionSelected: (option: SelectOption) => boolean;
  handleSelectOption: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: SelectOption
  ) => void;
  highlightedIndex: number;
  setHighlightedIndex: Dispatch<SetStateAction<number>>;
}

const Dropdown = ({
  isOpen,
  options,
  isOptionSelected,
  handleSelectOption,
  highlightedIndex,
  setHighlightedIndex,
}: DropdownProps) => (
  <motion.ul
    className="m-0 p-0 list-none max-h-60 overflow-y-auto border-2 border-gray-light border-solid rounded-lg w-full absolute left-0 top-[calc(100%_+_.5em)] z-50 bg-slate-50 myscroll"
    initial="close"
    animate={isOpen ? 'open' : 'close'}
    variants={slideVerticalAnimation}
  >
    {options.map((option: SelectOption, i: number) => (
      <li
        role="presentation"
        key={option.label}
        className={`cursor-pointer px-1 py-2 ${
          isOptionSelected(option) ? 'bg-primary-light' : ''
        } ${highlightedIndex === i ? 'bg-primary-dark' : ''}`}
        onClick={(e) => handleSelectOption(e, option)}
        onMouseEnter={() => setHighlightedIndex(i)}
      >
        <div className="form-control">
          <div className="label cursor-pointer">
            <span className="label-text">{option.label}</span>
            <div
              role="checkbox"
              aria-label="c"
              aria-checked={isOptionSelected(option)}
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
      </li>
    ))}
  </motion.ul>
);

export default Dropdown;
