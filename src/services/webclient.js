import axios from "axios";

export const baseURL = {
    hivelabs: 'https://portalaciei.hivelabs.com.br',
}

export const hivelabsWebClient = axios.create({
    baseURL: baseURL.hivelabs,
    responseType: 'json',
    timeout: 30000,
});
