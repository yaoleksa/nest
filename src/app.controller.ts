import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { Params } from './body-params.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHandler(@Res() res: Response) {
    this.appService.getPage(res);
  }

  @Get('/client/converted/converted.pdf')
  getFile(@Res() res: Response) {
    res.sendFile(
      '/home/oleksii/myHerkuApps/url-to-pdf/client/converted/converted.pdf',
    );
  }

  @Post()
  postHandler(@Body() Input: Params, @Req() req: Request) {
    return (
      req.protocol +
      '://' +
      req.get('Host') +
      this.appService.postUrl(Input) +
      '\n'
    );
  }
}
