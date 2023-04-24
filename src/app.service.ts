import { Injectable } from '@nestjs/common';
import ConvertApi from 'convertapi';

const convertapi = new ConvertApi('RRglHdfpI0OPktZs');

@Injectable()
export class AppService {
  getPage(res): void {
    res.sendFile('index.html', {
      root: './client',
    });
  }

  postUrl(body): string {
    convertapi
      .convert(
        'pdf',
        {
          Url: body.url,
          StoreFile: true,
          Fresume: true,
        },
        'web',
      )
      .then((result) => {
        result.saveFiles('./client/converted/converted.pdf');
      });
    return '/converted/converted.pdf';
  }
}
