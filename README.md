# Dynamic Form Builder

A React.js application that dynamically generates forms from JSON configuration objects. Built with Next.js, TypeScript, ShadCn UI and Tailwind CSS.

## Features

- **Dynamic Form Generation**: Create forms from JSON configuration
- **Multiple Field Types**: Support for text, email, number, tel, textarea, select, and checkbox fields
- **Built-in Validation**: Required field validation and type-specific validation
- **Custom Hooks**: Clean separation of concerns with custom hooks for state management and validation
- **Modular Architecture**: Scalable and maintainable code structure
- **TypeScript Support**: Full type safety throughout the application
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Basic Form Configuration

Create a form by providing a JSON configuration object:

\`\`\`javascript
const formConfig = {
title: "User Registration",
fields: [
{
label: "First Name",
name: "firstName",
type: "text",
required: true
},
{
label: "Email",
name: "email",
type: "email",
required: true
},
{
label: "Age",
name: "age",
type: "number"
},
{
label: "Subscribe to Newsletter",
name: "newsletter",
type: "checkbox"
}
]
}
\`\`\`

### Supported Field Types

- **text**: Standard text input
- **email**: Email input with validation
- **number**: Number input with validation
- **tel**: Phone number input with validation
- **textarea**: Multi-line text input
- **select**: Dropdown selection (requires options array)
- **checkbox**: Boolean checkbox input

### Select Field Configuration

For select fields, provide an options array:

\`\`\`javascript
{
label: "Country",
name: "country",
type: "select",
required: true,
options: [
{ value: "us", label: "United States" },
{ value: "ca", label: "Canada" },
{ value: "uk", label: "United Kingdom" }
]
}
\`\`\`

## Architecture

### Components

- **DynamicForm**: Main form component that orchestrates form rendering and submission
- **FormField**: Individual field renderer that handles different input types
- **UI Components**: Reusable UI components from shadcn/ui

### Custom Hooks

- **useFormState**: Manages form data state and provides update/reset functionality
- **useFormValidation**: Handles form validation logic and error state management

### Types

- **FormConfig**: Main form configuration interface
- **FormFieldConfig**: Individual field configuration interface
- **FormFieldOption**: Select field option interface

## Validation

The form builder includes comprehensive validation:

- **Required Fields**: Validates that required fields are not empty
- **Email Validation**: Ensures valid email format
- **Phone Validation**: Basic phone number format validation
- **Number Validation**: Ensures numeric input for number fields
- **Real-time Validation**: Clears errors as user types

## Customization

### Adding New Field Types

1. Add the new type to the \`FormFieldConfig\` type
2. Implement the field rendering logic in \`FormField\` component
3. Add any specific validation logic in \`useFormValidation\` hook

### Styling

The application uses Tailwind CSS for styling. Customize the appearance by modifying the Tailwind classes in the components.

## Project Structure

\`\`\`
├── app/
│ ├── page.tsx # Main application page
│ └── layout.tsx # Root layout
├── components/
│ ├── dynamic-form.tsx # Main form component
│ ├── form-field.tsx # Individual field component
│ └── ui/ # Reusable UI components
├── hooks/
│ ├── use-form-state.ts # Form state management hook
│ └── use-form-validation.ts # Form validation hook
├── types/
│ └── form-types.ts # TypeScript type definitions
└── README.md
\`\`\`

## Technical Decisions

### State Management

- Used React's built-in hooks (useState, useCallback) for state management
- Custom hooks provide clean separation of concerns
- No external state management library is needed for this scope

### Validation Strategy

- Built custom validation system instead of using external libraries
- Supports both synchronous validation and real-time error clearing
- Extensible design for adding new validation rules

### Component Architecture

- Functional components with hooks throughout
- Props drilling avoided through well-structured component hierarchy
- Each component has a single responsibility

### TypeScript Integration

- Full type safety for form configurations and data
- Interfaces designed for extensibility
- Type-safe field rendering and validation
\`\`\`
