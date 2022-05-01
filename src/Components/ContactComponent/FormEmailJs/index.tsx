import React, { useState } from 'react';
import Spinner from '../../../utils/Spinner';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import { Container } from './styles';

const FormEmailJs: React.FC = () => {

    const [sended, setSended] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [nameInput, setNameInput] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('GemailMessage', 'template_n7oty5b', e.currentTarget, 'k2IGkIaJuAg59Ltnp')
        .then(() => {
            setSended(true);
            toast(`Sr. ${nameInput} sua Mensagem foi enviada com sucesso!`);
            setLoading(false);
            setDisabledBtn(true);
            setNameInput('');
        }, () => {
            setSended(false);
            toast('Erro : esta mensagem não pode ser enviada.')
      });
      e.currentTarget.reset();
    }

  return (
     <>
        <ToastContainer/>
         <Container onSubmit={sendEmail} mode={disabledBtn}>
          <input type="text" name="name" placeholder="Seu Nome..." value={nameInput} onChange={e => setNameInput(e.target.value)} required/>
          <input type="email" name="email" placeholder="Seu Email..." required/>
          <textarea cols={50} rows={4} placeholder="Sua mensagem" name='message' required></textarea>
          {loading ? <button><Spinner/></button> : <> {disabledBtn ? <button disabled >Enviar</button> : <button>Enviar</button>}</>}
            {sended ? <h2> Entrarei em contato o mais breve possível. Obrigado!</h2> : null}
      </Container>
     </>
  );
}

export default FormEmailJs;