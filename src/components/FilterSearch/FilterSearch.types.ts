export interface IFilterSearch {
  disabled?: boolean;
  fontSize?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  hasFilter?: boolean;
  placeholder?: string;
  filterOptions?: FilterOption[];
  filterBy?: FilterOption | null;
  setFilterBy?: (v: FilterOption) => void;
  onSearch: (v: string) => void;
  onClear?: () => void;
  value?: string;
  isLoading?: boolean;
  selectedOptionWidth?: string;
  dropdownWidth?: string;
}

export type FilterOption = {
  name: string;
  value?: string;
};
