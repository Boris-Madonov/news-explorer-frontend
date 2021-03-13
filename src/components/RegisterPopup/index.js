import React, { useState } from 'react';
import Popup from '../Popup';
import FormInput from '../FormInput';
import Form from '../Form';
import PopupLink from '../PopupLink';
import { PlaceContext } from '../../contexts/PlaceContext';

function RegisterPopup({
  isOpen,
  onClose,
  onLoginPopup,
  onRegister,
}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!userEmail || !userPassword) {
      return;
    }

    onRegister(userEmail, userPassword, userName);
    setUserEmail('');
    setUserPassword('');
    setUserName('');
  };

  return (
    <PlaceContext.Provider value="register">
      <Popup
        name="register"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Form
          formTitle="Регистрация"
          buttonText="Зарегистрироваться"
          onSubmit={handleSubmit}
        >
          <FormInput
            inputName="Email"
            type="email"
            name="email"
            placeholder="Введите почту"
            value={userEmail || ''}
            onChange={handleChangeEmail}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="Пароль"
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={userPassword || ''}
            onChange={handleChangePassword}
            minLength="1"
            maxLength="40"
          />
          <FormInput
            inputName="Имя"
            type="text"
            name="name"
            placeholder="Введите своё имя"
            value={userName || ''}
            onChange={handleChangeName}
            minLength="2"
            maxLength="30"
          />
        </Form>
        <PopupLink
          onClick={onLoginPopup}
        />
      </Popup>
    </PlaceContext.Provider>
  );
}

export default RegisterPopup;