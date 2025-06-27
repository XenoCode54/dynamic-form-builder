"use client";

import { useState, useCallback } from "react";
import type { FormFieldConfig } from "@/types/form-types";

export function useFormValidation(fields: FormFieldConfig[]) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = useCallback(
    (field: FormFieldConfig, value: any): string | null => {
      if (field.required) {
        if (field.type === "checkbox") {
          if (!value) {
            return `${field.label} is required`;
          }
        } else if (
          !value ||
          (typeof value === "string" && value.trim() === "")
        ) {
          return `${field.label} is required`;
        }
      }

      if (value && typeof value === "string" && value.trim() !== "") {
        switch (field.type) {
          case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              return "Please enter a valid email address";
            }
            break;

          case "tel":
            const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-$$$$]/g, ""))) {
              return "Please enter a valid phone number";
            }
            break;

          case "number":
            if (isNaN(Number(value))) {
              return "Please enter a valid number";
            }
            break;
        }
      }

      return null;
    },
    [],
  );

  const validateForm = useCallback(
    (formData: Record<string, any>): Record<string, string> => {
      const newErrors: Record<string, string> = {};

      fields.forEach((field) => {
        const error = validateField(field, formData[field.name]);
        if (error) {
          newErrors[field.name] = error;
        }
      });

      setErrors(newErrors);
      return newErrors;
    },
    [fields, validateField],
  );

  const clearErrors = useCallback((fieldName?: string) => {
    if (fieldName) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    } else {
      setErrors({});
    }
  }, []);

  return {
    errors,
    validateForm,
    clearErrors,
  };
}
