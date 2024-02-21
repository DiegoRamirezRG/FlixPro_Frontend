export interface ValidateStepCinemaInterface {
    cinemaName: string;
    cinemaLogo?: File | null;
}

export interface TMDBAutheticationResponse {
    success:        boolean;
    status_code:    number;
    status_message: string;
}
