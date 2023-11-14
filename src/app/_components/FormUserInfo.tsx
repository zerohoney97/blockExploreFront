import React from "react";
import FormInput from "@app/(page)/login/_contents/FormInput";
import ErrorMessage from "@app/(page)/login/_contents/ErrorMessage";

interface FormUserInfoProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholder?: string;
}

const FormUserInfo: React.FC<FormUserInfoProps> = ({
  label,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="pb-7 relative w-80 font-semibold text-sm">
      <h3>{label}</h3>
      <div>
        <FormInput type={type} value={value} onChange={onChange} />
      </div>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default FormUserInfo;
