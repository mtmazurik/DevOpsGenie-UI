export class ConfigurationModel {
    serviceAddress: string;
    servicePort: number;
    auth0ClientId: string;
    auth0ClientSecret: string;
    auth0Audience: string;
    auth0GrantType: string;

    imageRegistryURI: string;
    imageRegistryPort: number;
}