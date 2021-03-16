import React, { useEffect } from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Popup from '../Popup';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';
import useForm from '../../hooks/useForm';

function LoginPopup({
  isOpen,
  onClose,
  onRegisterPopup,
  onLogin,
  setFormError,
  formError,
}) {
  const {
    handleChangeInput,
    handleSubmit,
    values,
    validationError,
    setValidationError,
    setValues,
    setIsValid,
    isValid,
    isFormValid
  } = useForm(submitForm);

  useEffect(() => {
    setValidationError({
      email: "",
      password: "",
    });
    setValues({
      email: "",
      password: "",
    });
    setIsValid({
      email: false,
      password: false,
    });
    setFormError('');
  }, [setValidationError, setValues, setIsValid, setFormError, isOpen]);

  function submitForm(e) {
    const { email, password } = values;
    onLogin(email, password);
  };

  return (
    <PlaceContext.Provider value="login">
      <Popup
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      >
        <Form
          formTitle="Вход"
          buttonText="Войти"
          onSubmit={handleSubmit}
          isDisabled={!isFormValid}
          formError={formError}
        >
          <FormInput
            inputName="email"
            type="email"
            name="email"
            placeholder="Введите почту"
            value={String(values.email)}
            onChange={handleChangeInput}
            isValid={isValid.email}
            error={`${values.email === ""
              ? validationError.email
              : `Неправильный формат email`
            }`}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="password"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={String(values.password)}
            onChange={handleChangeInput}
            isValid={isValid.password}
            error={validationError.password}
            minLength="1"
            maxLength="40"
          />
        </Form>
        <PopupLink
          onClick={onRegisterPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default LoginPopup;