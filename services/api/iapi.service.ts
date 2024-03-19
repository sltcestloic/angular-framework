export abstract class IApiService {

    public abstract callApi<T>(url: string, method: string, body?: any): Promise<T>;
    public abstract get<T>(url: string, body?: any): Promise<T>;
    public abstract post<T>(url: string, body?: any): Promise<T>;
    public abstract put<T>(url: string, body?: any): Promise<T>;
    public abstract delete<T>(url: string, body?: any): Promise<T>;
}