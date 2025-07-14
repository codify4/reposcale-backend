import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let data = '';
    
    // Set encoding to utf8
    req.setEncoding('utf8');

    // Collect data chunks
    req.on('data', (chunk) => {
      data += chunk;
    });

    // When all data is received
    req.on('end', () => {
      // Store the raw body
      (req as any).rawBody = data;
      
      // Parse the body for normal use
      try {
        req.body = JSON.parse(data);
      } catch (e) {
        // If JSON parsing fails, keep the raw data
        req.body = data;
      }
      
      next();
    });

    // Handle errors
    req.on('error', (err) => {
      next(err);
    });
  }
}