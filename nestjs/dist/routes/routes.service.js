"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let RoutesService = class RoutesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createRouteDto) {
        return this.prismaService.route.create({
            data: {
                name: createRouteDto.name,
                source: {
                    name: 'nome origem',
                    location: {
                        lat: 0,
                        lng: 0,
                    }
                },
                destination: {
                    name: 'nome destino',
                    location: {
                        lat: 0,
                        lng: 0,
                    }
                },
                distance: 0,
                duration: 0,
                directions: '{}',
            }
        });
    }
    findAll() {
        return this.prismaService.route.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} route`;
    }
    update(id, updateRouteDto) {
        return `This action updates a #${id} route`;
    }
    remove(id) {
        return `This action removes a #${id} route`;
    }
};
exports.RoutesService = RoutesService;
exports.RoutesService = RoutesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoutesService);
//# sourceMappingURL=routes.service.js.map