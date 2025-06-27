"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormFieldConfig } from "@/types/form-types";

interface FormFieldProps {
  field: FormFieldConfig;
  value: any;
  error?: string;
  onChange: (value: any) => void;
}

export default function FormField({
  field,
  value,
  error,
  onChange,
}: FormFieldProps) {
  const { label, name, type, required, options } = field;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            id={name}
            name={name}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className={error ? "border-red-500" : ""}
            rows={4}
          />
        );

      case "select":
        return (
          <Select value={value || ""} onValueChange={onChange}>
            <SelectTrigger className={error ? "border-red-500" : ""}>
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              checked={value || false}
              onCheckedChange={onChange}
            />
            <Label htmlFor={name} className="text-sm font-normal">
              {label}
            </Label>
          </div>
        );

      default:
        return (
          <Input
            id={name}
            name={name}
            type={type}
            value={value || ""}
            onChange={(e) => {
              const inputValue =
                type === "number"
                  ? e.target.value === ""
                    ? ""
                    : Number(e.target.value)
                  : e.target.value;
              onChange(inputValue);
            }}
            className={error ? "border-red-500" : ""}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      {type !== "checkbox" && (
        <Label htmlFor={name} className="text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      {renderInput()}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
