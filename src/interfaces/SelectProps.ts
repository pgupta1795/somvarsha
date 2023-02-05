export type SelectOption = {
  label: string;
  value: string | number;
};

interface MultiVal {
  multiple: true;
  value: SelectOption[];
}

interface SingleVal {
  multiple?: false;
  value: SelectOption | undefined;
}

export type ValueProps = MultiVal | SingleVal;

interface MultiSelectProps extends MultiVal {
  onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps extends SingleVal {
  onChange: (value: SelectOption | undefined) => void;
}

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultiSelectProps);
