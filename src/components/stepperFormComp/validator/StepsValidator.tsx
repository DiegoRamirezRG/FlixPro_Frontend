import axios from "axios";
import { TMDBAutheticationResponse } from "./StepsValidatorInterface";

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
            axios.get<TMDBAutheticationResponse>('https://api.themoviedb.org/3/authentication',{ headers: { Authorization: `Bearer ${access_token}` } })
                .then((response) => {
                    if(response.data.success){
                        resolve(true);
                    }
                }).catch((axiosError: any) => {
                    console.error(axiosError)
                    reject('Error al autenticar las llaves colocadas');
                });
        }
    })
}
