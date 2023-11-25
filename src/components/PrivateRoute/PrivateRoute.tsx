import { Navigate } from 'react-router-dom';
import { requestUtils } from '../../services/requestUtils';
import FormComponent from '../form.component';
import GridComponent from '../grid.component';
import { useQuery } from 'react-query';




const PrivateRoute = (_props: any) => {


    const { data, isLoading, isError } = useQuery('mensaje', () => validateAcces())
    

    const validateAcces = async () => {
        const endpoint: string = requestUtils.apiEndpoint + 'ruta-protegida'
        const response = await (await fetch(endpoint, { credentials: 'include' })).json();
        return response.mensaje ;
    }

    if (isLoading) {
        return null;
    }

    if (isError) {
        return <div>Error loading: {isError}</div>;
    }

    return (
        <>
            {
                data ?
                    <>
                        <FormComponent />
                        <GridComponent />
                    </> :
                    <Navigate to='/login' />
            }
        </>
    );





}

export default PrivateRoute;