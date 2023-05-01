"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const convertapi_1 = require("convertapi");
const convertapi = new convertapi_1.default('RRglHdfpI0OPktZs');
let AppService = class AppService {
    getPage(res) {
        res.sendFile('index.html', {
            root: './client',
        });
    }
    postUrl(body) {
        convertapi
            .convert('pdf', {
            Url: body.url,
            StoreFile: true,
            Fresume: true,
        }, 'web')
            .then((result) => {
            result.saveFiles('./client/converted/converted.pdf');
        });
        return '/converted/converted.pdf';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map