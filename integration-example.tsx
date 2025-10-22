// Example of how to integrate the font picker with react-hook-form
// This would go in your hero-hook-form package

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FontPicker, FontPickerField } from "@rachel-allyson/heroui-font-picker";

// The font picker automatically detects which HeroUI package is available:
// - @heroui/react (full package)
// - @heroui/autocomplete (autocomplete-only package)

// Example 1: Using the basic FontPicker with native Autocomplete props
function BasicIntegration() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="font"
        control={control}
        render={({ field, fieldState }) => (
          <FontPicker
            label="Choose Font"
            description="Select your preferred font"
            errorMessage={fieldState.error?.message}
            isInvalid={!!fieldState.error}
            value={field.value || ""}
            onSelectionChange={(key) => field.onChange(key)}
            placeholder="Choose a font..."
            showFontPreview={true}
            size="md"
            variant="bordered"
            isRequired
          />
        )}
      />
    </form>
  );
}

// Example 2: Using the FontPickerField wrapper
function FieldWrapperIntegration() {
  const [font, setFont] = React.useState("Inter");
  const [error, setError] = React.useState("");

  return (
    <FontPickerField
      label="Choose Font"
      description="Select your preferred font"
      value={font}
      onChange={setFont}
      error={error}
      fontPickerProps={{
        showFontPreview: true,
        loadAllVariants: false
      }}
    />
  );
}

// Example 3: How your hero-hook-form package could create a FontPickerField
// that integrates with react-hook-form
export function createFontPickerField<TFieldValues extends Record<string, any>>(
  name: keyof TFieldValues,
  control: any,
  options: {
    label?: string;
    description?: string;
    disabled?: boolean;
    showFontPreview?: boolean;
    loadAllVariants?: boolean;
  } = {}
) {
  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field, fieldState }) => (
        <FontPickerField
          label={options.label}
          description={options.description}
          value={field.value || ""}
          onChange={field.onChange}
          error={fieldState.error?.message}
          disabled={options.disabled}
          fontPickerProps={{
            showFontPreview: options.showFontPreview,
            loadAllVariants: options.loadAllVariants
          }}
        />
      )}
    />
  );
}

export { BasicIntegration, FieldWrapperIntegration };
