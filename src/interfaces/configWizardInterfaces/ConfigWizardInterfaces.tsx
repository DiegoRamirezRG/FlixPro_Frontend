export interface ConfigWizardContextInterface{
    getInitConfigState: () => Promise<boolean>;
    isConfigFinished: boolean | null;
    initConfigValues: initConfigValuesInterface;
    handleInitConfigInputs: (name: string, value: any) => void;
    saveInitConfigs: () => Promise<boolean>;
}

export interface initConfigValuesInterface{
    name: string;
    logo?: File | null;
    logoRender?: string | null;
    tmdb_access_token: string;
    tmdb_api_key: string;
}