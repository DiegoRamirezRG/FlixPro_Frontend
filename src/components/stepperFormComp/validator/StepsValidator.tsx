
export const ValidateStepCinema = async (cinemaName: string, cinemaLogo: File | null) => {
    return new Promise(async (resolve, reject) => {
        if(!cinemaName.trim()){
            reject('Nombre es obligatorio');
        }else if(cinemaLogo && !['image/png', 'image/jpeg'].includes(cinemaLogo.type)){
            reject('Por favor selecciona una imagen válida (PNG/JPG)');
        }else{
            resolve(true);
        }
    })
}

export const ValidateTMDBApiCredentials = async (access_token: string, api_key: string) => {
    return new Promise(async (resolve, reject) => {
        if(!api_key.trim()){
            reject('Ingrese un Api Key valido')
        }else if(!access_token.trim()){
            reject('Ingrese un Access Token valido');
        }else{
            //TODO: Hacer que me Authorize con el api_key por medio de la llama al auth de tmdb
            resolve(true);
        }
    })
}
