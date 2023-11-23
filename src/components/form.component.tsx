import { ChangeEvent, FormEvent, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import './form.component.css';
import { valoresInicialesFormularioProducto, valoresInicialesRepuestaServer } from '../config/valoresPorDefecto';
import { TipoRespuestaServidor } from '../interfaces/interfaces';


function FormComponent() {

  const [ formValue, setFormValue] = useState(valoresInicialesFormularioProducto);
  const [ showSpinner, setShowSpinner] = useState(false);
  const [ alertDetails, setAlertDetails ] = useState(valoresInicialesRepuestaServer);



  const sendData = async (url: string, data: any) => {
    const requestInit: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    }
    try {
      return (await fetch(url, requestInit)).json();
    } catch (error) {
      return error;
    }
  }


  // Evento para envio de datos al servidor
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setShowSpinner(true);


    sendData("http://localhost:3000/", JSON.stringify(formValue))
      .then((response : TipoRespuestaServidor) => {
        setFormValue({ ...valoresInicialesFormularioProducto })
        if(response.created){
          setAlertDetails(response)
          timeAlertShow(3000);
        }
        
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setShowSpinner(false);
      })


    const timeAlertShow = (timeMilliseconds: number ) => {
      setTimeout(() => {
        setAlertDetails({show: false})
      }, timeMilliseconds)
    }


  }

  // Recolecta los datos del formulario
  const handleFormValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }



  return (
    <>


      <div className='border' style={{ padding: '2rem', width: '24rem', position: 'relative' }} >
        {
          showSpinner ?
            <div className='form_spinner_active' >
              <Spinner animation='border' />
            </div> :
            null
        }


        {
          alertDetails.show ?
            <Alert variant={alertDetails.variant} transition={true} >
              {alertDetails.message}
            </Alert> :
            null
        }



        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="mb-3">
            <label 
              htmlFor="productoCodigo" 
              className="form-label" >Codigo Producto</label>
            <input
              value={formValue.codigo}
              name='codigo'
              onChange={e => handleFormValues(e)} style={{ width: '20rem' }}
              type="text"
              required
              className="form-control"
              id="productoCodigo" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoNombre" className="form-label">Nombre Producto</label>
            <input
              value={formValue.title}
              name='title'
              onChange={e => handleFormValues(e)}
              style={{ width: '20rem' }}
              type="text"
              required
              className="form-control"
              id="productoNombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoValorNeto" className="form-label">Valor Neto</label>
            <input
              value={formValue.valor_mayorista}
              name='valor_mayorista'
              onChange={e => handleFormValues(e)}
              style={{ width: '20rem' }}
              type="number"
              required
              className="form-control"
              id="productoValorNeto" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoValorVenta" className="form-label">Valor Venta</label>
            <input
              value={formValue.pvp}
              name='pvp'
              onChange={e => handleFormValues(e)}
              style={{ width: '20rem' }}
              type="number"
              required
              className="form-control"
              id="productoValorVenta" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}

export default FormComponent;