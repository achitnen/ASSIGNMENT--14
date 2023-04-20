import { Assignment14Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Assignment14Application;
    client: Client;
}
