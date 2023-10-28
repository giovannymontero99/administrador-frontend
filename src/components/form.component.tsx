import { ChangeEvent, FormEvent, useState } from 'react';


function FormComponent() {


  const [ formValue, setFormValue ] = useState({});

  // Evento para envio de datos al servidor
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    try {
      const sendData = async ( url: string, data: any) => {
        const requestInit : RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        }
        const response = await fetch( url, requestInit );
        const responsejson = await response.json();
        console.log(responsejson);
      }
      sendData("http://localhost:3000/", JSON.stringify(formValue) )
    } catch (error) {
      console.log(error);
    }
  }

  // Recolecta los datos del formulario
  const handleFormValues = ( event: ChangeEvent<HTMLInputElement> )=>{
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }



  return (
    <>
      <div className='border' style={{ padding: '2rem', width: '24rem' }} >
        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="mb-3">
            <label htmlFor="productoCodigo" className="form-label" >Codigo Producto</label>
            <input name='productoCodigo' onChange={ e => handleFormValues(e) } style={{ width: '20rem' }} type="text" required className="form-control" id="productoCodigo" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoNombre" className="form-label">Nombre Producto</label>
            <input name='productoNombre' onChange={ e => handleFormValues(e) } style={{ width: '20rem' }} type="text" required className="form-control" id="productoNombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoValorNeto" className="form-label">Valor Neto</label>
            <input name='productoValorNeto' onChange={ e => handleFormValues(e) } style={{ width: '20rem' }} type="number" required className="form-control" id="productoValorNeto" />
          </div>
          <div className="mb-3">
            <label htmlFor="productoValorVenta" className="form-label">Valor Venta</label>
            <input name='productoValorVenta' onChange={ e => handleFormValues(e) } style={{ width: '20rem' }} type="number" required className="form-control" id="productoValorVenta" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}

export default FormComponent;