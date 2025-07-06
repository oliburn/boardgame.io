import type { CorsOptions } from 'cors';
import type { Router } from 'express';
import express from 'express';
import type { Auth } from './auth';
import type { Game, StorageAPI } from '../types';
export declare const configureRouter: ({ router, db, auth, games, uuid, }: {
    router: Router;
    auth: Auth;
    games: Game[];
    uuid?: () => string;
    db: StorageAPI.Sync | StorageAPI.Async;
}) => Router;
export declare const configureApp: (app: express.Application, router: Router, origins: CorsOptions['origin']) => void;
