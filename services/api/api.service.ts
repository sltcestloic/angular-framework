import { Injectable } from "@angular/core";
import { IApiService } from "./iapi.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class ApiService implements IApiService {

    constructor(
        private readonly _httpClient: HttpClient,
    ) { }

    private getBaseUrl(): string {
        return `api.${document.getElementsByTagName('base')[0].href}`;
    }

    public async callApi<T>(url: string, method: string, body?: any): Promise<T> {
        const req = this._httpClient.request<T>(method, `${this.getBaseUrl()}${url}}`, { body });

        return new Promise<T>((resolve, reject) => {

            const onComplete: (data: any) => void = (data: any) => {
                resolve(data);
            };

            const onError: (error: any) => void = error => {
                reject(error);
            };

            req.subscribe({
                next: data => onComplete(data),
                error: error => onError(error),
            });
        });
    }

    public async get<T>(url: string, body?: any): Promise<T> {
        return this.callApi<T>(url, 'GET', body);
    }

    public async post<T>(url: string, body?: any): Promise<T> {
        return this.callApi<T>(url, 'POST', body);
    }

    public async put<T>(url: string, body?: any): Promise<T> {
        return this.callApi<T>(url, 'PUT', body);
    }

    public async delete<T>(url: string, body?: any): Promise<T> {
        return this.callApi<T>(url, 'DELETE', body);
    }
}