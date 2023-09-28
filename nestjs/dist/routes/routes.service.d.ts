import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { PrismaService } from "src/prisma/prisma/prisma.service";
export declare class RoutesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createRouteDto: CreateRouteDto): import(".prisma/client").Prisma.Prisma__RouteClient<{
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
        distance: number;
        duration: number;
        directions: import(".prisma/client").Prisma.JsonValue;
    } & {
        source: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
        destination: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        id: string;
        name: string;
        created_at: Date;
        updated_at: Date;
        distance: number;
        duration: number;
        directions: import(".prisma/client").Prisma.JsonValue;
    } & {
        source: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
        destination: {
            name: string;
        } & {
            location: {
                lat: number;
                lng: number;
            };
        };
    })[]>;
    findOne(id: number): string;
    update(id: number, updateRouteDto: UpdateRouteDto): string;
    remove(id: number): string;
}
