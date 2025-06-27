export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldConfig {
  label: string;
  name: string;
  type:
    | "text"
    | "email"
    | "number"
    | "tel"
    | "textarea"
    | "select"
    | "checkbox";
  required?: boolean;
  options?: FormFieldOption[];
}

export interface FormConfig {
  title: string;
  fields: FormFieldConfig[];
}
