"use client";

import DynamicForm from "@/components/dynamic-form";

const sampleFormConfig = {
  title: "User Registration",
  fields: [
    { label: "First Name", name: "firstName", type: "text", required: true },
    { label: "Last Name", name: "lastName", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Age", name: "age", type: "number" },
    { label: "Subscribe to Newsletter", name: "newsletter", type: "checkbox" },
  ],
};

const additionalFormConfig = {
  title: "Contact Form",
  fields: [
    { label: "Company Name", name: "company", type: "text", required: true },
    { label: "Phone Number", name: "phone", type: "tel", required: true },
    { label: "Message", name: "message", type: "textarea", required: true },
    {
      label: "Preferred Contact Method",
      name: "contactMethod",
      type: "select",
      required: true,
      options: [
        { value: "email", label: "Email" },
        { value: "phone", label: "Phone" },
        { value: "text", label: "Text Message" },
      ],
    },
    { label: "Urgent Request", name: "urgent", type: "checkbox" },
  ],
};

export default function Home() {
  const handleFormSubmit = (formData: Record<string, any>) => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted! Check console logs for data.");
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Dynamic Form Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <DynamicForm config={sampleFormConfig} onSubmit={handleFormSubmit} />
        </div>

        <div className="space-y-6">
          <DynamicForm
            config={additionalFormConfig}
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How it works:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Forms are generated dynamically from JSON configuration</li>
          <li>
            Supports text, email, number, tel, textarea, select, and checkbox
            field types
          </li>
          <li>Built-in validation for required fields and field types</li>
          <li>Custom hooks for state management and validation</li>
          <li>Modular, scalable architecture</li>
          <li>Form data is logged to console on submission</li>
        </ul>
        <p className="text-sm font-semibold mt-4">Macmanuel Olawale Odumeru</p>
      </div>
    </div>
  );
}
