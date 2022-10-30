import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "../ItemContainer/Items.css";
import { Link } from 'react-router-dom';

const person = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(person);
  const [id, setId] = useState();

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then((snapshot) => {
      setId(snapshot.id);
    });
  };


  return (
    <div className='brief'>
      {id ? (
        <div>
          Gracias por ponerse en contacto con nosotros. Su consulta fue guardada con el código {id}. Nos pondremos en contacto con usted a la brevedad.
          <div className='label'>
          <Link to={"/productos"} className="link">Volver</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className='label'>Nombre</label>
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={changeHandler}
              className='label'
            />
          </div>
          <div>
            <label htmlFor="email" className='label'>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
              className='label'
            />
          </div>
          <div>
            <label htmlFor="message" className='label'>Mensaje</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={changeHandler}
              className='label'
            ></textarea>
          </div>
          <button className='label'>Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;