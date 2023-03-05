import { GroupBase, OptionsOrGroups } from "react-select";

export type SelectInputProps = {
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  defaultValue?: any;
  icon?: React.ReactNode;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
}