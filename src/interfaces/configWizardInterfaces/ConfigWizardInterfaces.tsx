export interface ConfigWizardContextInterface{
    getInitConfigState: () => Promise<boolean>;
    initConfigValues: initConfigValuesInterface;
    handleInitConfigInputs: (name: string, value: any) => void;
}

export interface initConfigValuesInterface{
    name: string;
    logo?: File | null;
    logoRender?: string | null;
    tmdb_access_token: string;
    tmdb_api_key: string;
}