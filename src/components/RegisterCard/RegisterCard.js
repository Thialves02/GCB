import React from 'react'
import { Field, Form, Formik } from 'formik'
import './RegisterCard.css'
import Button from '../Button/Button';

export default function RegisterCard() {
    function onBlurCep(e,setFieldValue){
        const { value } = e.target

        const cep = value?.replace(/[^0-9]/g,'');

        if(cep?.length !== 8){
           return;
        }

        fetch(`https://viacep.com.br/ws/${value}/json/`)  
        .then((res) => res.json()) 
        .then((data)=> {
            setFieldValue('rua', data.logradouro);
            setFieldValue('bairro', data.bairro);
            setFieldValue('cidade', data.localidade);
          });
    }
    return (
        <div className='registerCard-container'>
            <Formik
                validateOnMount
                initialValues={{
                  cep: '',
                  rua: '',
                  numero: '',
                  bairro: '',
                  cidade: '',
                }}
                    render={({isValid,  setFieldValue }) => (
                    <Form>
                        <h1>Register</h1>
                        <p>Name</p>
                        <Field  type="text" name="nome"/>
                        <p>City</p>
                        <Field  type="text" name="cidade"/>
                        <p>Zip Code</p>
                        <Field  type="text" name="cep" onBlur={(e) => onBlurCep(e,setFieldValue)}/>
                        <p>District</p>
                        <Field  type="text" name="bairro"/>
                        <p>Street</p>
                        <Field  type="text" name="rua"/>
                        <p>Number</p>
                        <Field  type="text" name="numero"/>
                        <Button
                        title="Register"
                        />
                    </Form>
                    )}
                    />
        </div>
    )
}
