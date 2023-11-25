export const sendData = async (url: string, data: BodyInit) => {
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