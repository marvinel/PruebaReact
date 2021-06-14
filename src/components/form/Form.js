import React, { useState } from 'react';

import './styles/styles.css'

import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function Form() {



    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [edad, setedad] = useState(18)
    const [celular, setcelular] = useState('')
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState({
        nombre: false,
        email: false,
        celular: false
    });

    const nombreRef = React.createRef();
    const EmailRef = React.createRef();
    const CelularRef = React.createRef();
    const EdadRef = React.createRef();
    var ed = 10;

    const valuetext = (value) => {
        ed = value;

    }

    const handleSliderChange = (event, newValue) => {
        setedad(newValue);
    };

    const handleInputChange = (event) => {
        console.log("slider: " + event.target.value)
        const onlyN = /^[0-9]*$/g.test(event.target.value)
        if (onlyN === false || event.target.value > 100) {
            setedad(100)
        } else {
            setedad(event.target.value === '' ? '' : Number(event.target.value));
        }

    };

    const handleNameChange = (event) => {
        setname(event.target.value === '' ? '' : event.target.value);
    };
    const handleEmailChange = (event) => {

        setemail(event.target.value === '' ? '' : event.target.value);

    };
    const handleCelularChange = (event) => {

        const onlyN = /^[0-9]*$/g.test(event.target.value)

        if (onlyN === false || event.target.value.length > 10) {
            setcelular(event.target.value.substring(0, event.target.value.length - 1))
        } else {
            setcelular(event.target.value === '' ? '' : Number(event.target.value));
        }

    };

    const recibirformulario = (e) => {
        e.preventDefault();
        const onlyL = /^[a-zA-Z\s]*$/g.test(nombreRef.current.value)
        var emailV = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(EmailRef.current.value);
        var errorn, errore, errorc = false
        if (nombreRef.current.value.trim() === "" || onlyL === false || nombreRef.current.value.length <= 2) {
            errorn = true
        }

        if (EmailRef.current.value.trim() === "" || emailV === false) {
            errore = true
        }


        if (CelularRef.current.value.trim() === "" || CelularRef.current.value.length <= 4) {
            errorc = true
        }

        setError({
            nombre: errorn,
            email: errore,
            celular: errorc
        })




        if (errorn || errore || errorc) {
            console.log('hay errores')
        } else {


            var user = {
                nombre: nombreRef.current.value,
                email: EmailRef.current.value,
                celular: CelularRef.current.value,
                edad: ed,
            }
           

            console.log("USUARIO CREADO \n "+ "nombre: "+ user.nombre +"\n email: "+ user.email+"\n celular: "+ user.celular+ "\n edad: "+ user.edad)
            setOpen(true);

             setname('');
             setemail('');
             setcelular('');
             setedad(18);

            setTimeout(() => {
                setOpen(false)
            }, 5000)

        }

    }


    return (
        <Paper className="container">


            <Dialog aria-labelledby="simple-dialog-title" open={open} className="ligthbox">
                <DialogTitle id="simple-dialog-title">Registrado Correctamente</DialogTitle>
                <p> Tu información fue enviada con éxito, estaremos en contacto
                    contigo </p>
                <CheckCircleIcon className="icon" />
            </Dialog>

            <form className="form" onSubmit={recibirformulario}>



                <TextField className="form-input" error={error.nombre} label="Nombre" value={name} onChange={handleNameChange} variant="outlined" inputRef={nombreRef} />

                <TextField className="form-input" error={error.email} label="Email" value={email} onChange={handleEmailChange} variant="outlined" inputRef={EmailRef} />


                <TextField className="form-input" error={error.celular} label="Celular" variant="outlined" inputRef={CelularRef} value={celular} onChange={handleCelularChange} />


                <div className="input-edad">


                    <Slider
                        className="slider"
                        // defaultValue={30}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        //  marks
                        min={18}
                        max={100}
                        value={typeof edad === 'number' ? edad : 0}
                        onChange={handleSliderChange}
                    />
                    <TextField className="edad" id="standard-basic" label="Edad" inputRef={EdadRef} value={edad} onChange={handleInputChange} />

                </div>


                <input type="submit"  value="ENVIAR" className="submit" />

            </form>

        </Paper>
    );
}

export default Form;
