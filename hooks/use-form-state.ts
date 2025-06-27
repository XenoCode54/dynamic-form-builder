"use client";

import { useState, useCallback } from "react";
import type { FormFieldConfig } from "@/types/form-types";

export function useFormState(fields: FormFieldConfig[]) {
  const getInitialState = useCallback(() => {
    const initialState: Record<string, any> = {};
    fields.forEach((field) => {
      switch (field.type) {
        case "checkbox":
          initialState[field.name] = false;
          break;
        case "number":
          initialState[field.name] = "";
          break;
        default:
          initialState[field.name] = "";
      }
    });
    // console.log("useFormState#(anon) initialState:", initialState);
    return initialState;
  }, [fields]);

  const [formData, setFormData] =
    useState<Record<string, any>>(getInitialState);

  const updateField = useCallback((name: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(getInitialState());
  }, [getInitialState]);

  return {
    formData,
    updateField,
    resetForm,
    setFormData,
  };
}
