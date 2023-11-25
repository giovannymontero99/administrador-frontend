import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { defaultValueDataServer } from "../config/valoresPorDefecto";
import { requestUtils } from "../services/requestUtils";


function GridComponent() {

    const [dataTable, setDataTable] = useState(defaultValueDataServer);
    const [ updateData , setUpdateData ] = useState( true );


    const getProductsData = async (url: string) => {
        const response = await fetch(url);
        const resJson = await response.json();
        setDataTable(resJson);
    }

    useEffect(() => {
        const endPoint : string = requestUtils.apiEndpoint + 'all-products';
        getProductsData( endPoint );
    }, [updateData]);



    return (
        <>
        <Button variant="info" onClick={()=> setUpdateData(!updateData) } >Actualizar</Button>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Valor neto</th>
                    <th>Valor venta</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataTable === null ?
                        null :
                        dataTable.map((product) => {
                            if (product._id === null) return null
                            return (
                                <tr key={product._id} >
                                    <td>{product.id}</td>
                                    <td>{product.codigo}</td>
                                    <td>{product.title}</td>
                                    <td>{product.valor_mayorista}</td>
                                    <td>{product.pvp}</td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </Table>
        </>
    )
}

export default GridComponent;