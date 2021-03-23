import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [validationError, setValidationError] = useState({});
  const [isValid, setIsValid] = useState({});

  const isFormValid = Object.values(isValid).every(Boolean);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setValidationError({
      ...validationError,
      [name]: e.target.validationMessage,
    });
    setIsValid({
      ...isValid,
      [name]: e.target.validity.valid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return {
    handleChangeInput,
    handleSubmit,
    setValidationError,
    setValues,
    setIsValid,
    values,
    validationError,
    isValid,
    isFormValid,
  };
};

export default useForm;
