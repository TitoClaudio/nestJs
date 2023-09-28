import { Client as GoogleMapsClient } from "@googlemaps/google-maps-services-js";
import { ConfigService } from "@nestjs/config";
export declare class PlacesService {
    private configService;
    private googleMapsClient;
    constructor(configService: ConfigService, googleMapsClient: GoogleMapsClient);
    findPlace(text: string): Promise<import("@googlemaps/google-maps-services-js").FindPlaceFromTextResponseData>;
}
