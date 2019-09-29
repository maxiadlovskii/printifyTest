import { environment } from "../../environments/environment"

const env = environment.production ? 'production': 'developer';

const urls = {
    MAIN_API: {
        'production': 'http://localhost:4200/assets/',
        'developer': 'http://localhost:4200/assets/'
    }
};

export const MAIN_API = urls.MAIN_API[env];