export type Genders = 'Male' | 'Female' | 'Other';

export interface UserInterface {
    first_name:       string;
    last_name:        string;
    extra_name:       string | null;
    gender:           Genders;
    date_of_birth:    string;
    fk_user_roles:    string;
    user_active:      boolean;
    user_profile:     string | null;
    role_name:        string;
    role_description: string | null;
    email:            string;
}