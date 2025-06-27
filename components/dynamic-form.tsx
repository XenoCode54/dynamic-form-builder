"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormField from "./form-field";
import { useFormState } from "@/hooks/use-form-state";
import { useFormValidation } from "@/hooks/use-form-validation";
import type { FormConfig } from "@/types/form-types";

interface DynamicFormProps {
  config: FormConfig;
  onSubmit: (data: Record<string, any>) => void;
}

export default function DynamicForm({ config, onSubmit }: DynamicFormProps) {
  const { formData, updateField, resetForm } = useFormState(config.fields);
  const { errors, validateForm, clearErrors } = useFormValidation(
    config.fields,
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearErrors();

    const validationErrors = validateForm(formData);
    // console.log("DynamicForm#handleSubmit validationErrors:", validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      resetForm();
    }
  };

  const handleFieldChange = (name: string, value: any) => {
    updateField(name, value);

    // Clear error for this field when user is typing
    if (errors[name]) {
      clearErrors(name);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{config.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {config.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name] || ""}
              error={errors[field.name]}
              onChange={(value) => handleFieldChange(field.name, value)}
            />
          ))}

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Submit
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
              className="flex-1 bg-transparent"
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
