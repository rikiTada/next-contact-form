import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "./ui/input";
// import { FieldValues, UseFormRegister } from "react-hook-form";
import { Textarea } from "./ui/textarea";

type InputFieldType = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  variant?: string;
  // register: UseFormRegister<FieldValues>;
  // errors: any;
};

export function InputField({
  label,
  name,
  type,
  placeholder,
  variant,
  // register,
  // errors,
}: InputFieldType) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-primary/70 text-[0.75em]">
            {label}
          </FormLabel>
          <FormControl>
            {variant === "textarea" ? (
              <Textarea
                placeholder="入力してください"
                className="placeholder:text-muted-foreground/50"
                rows={6}
                {...field}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                className="placeholder:text-muted-foreground/50"
                {...field}
              />
            )}
          </FormControl>
          {/* {errors.name && (
            <p className="text-red-500 text-[0.75rem] transition-all duration-100">
              {errors.name.message}
            </p>
          )} */}
        </FormItem>
      )}
    />
  );
}
