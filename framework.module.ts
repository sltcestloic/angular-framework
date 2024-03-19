import { Provider } from "@angular/core";
import { IApiService } from "./services/api/iapi.service";
import { ApiService } from "./services/api/api.service";

export class FrameworkModule {

    public static getStandardServices(): Provider[] {
        return [
            { provide: IApiService, useClass: ApiService }
        ];
    }
}