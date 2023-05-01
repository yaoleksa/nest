import { AppService } from './app.service';
import { Response, Request } from 'express';
import { Params } from './body-params.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHandler(res: Response): void;
    getFile(res: Response): void;
    postHandler(Input: Params, req: Request): string;
}
