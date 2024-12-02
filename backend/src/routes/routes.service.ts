import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private readonly prismaService: PrismaService) {}

  async createRoute(name: string) {
    try {
      const newRoute = await this.prismaService.route.create({
        data: { name },
      });
      if (!newRoute) {
        return { success: false, error: 'Failed to create new route' };
      } else {
        return { success: true, data: newRoute };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }

  async assignClientToRoute(clientId: string, routeId: string) {
    try {
      const assignRoute = await this.prismaService.client.update({
        where: { id: clientId },
        data: { routeId },
      });
      if (!assignRoute) {
        return { success: false, error: 'Failed to find client' };
      } else {
        return { success: true, data: assignRoute };
      }
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }

  async findDistance(origin: string, destination: string) {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin
        .split(' ')
        .map((item, index) =>
          index !== origin.split(' ').length - 1 ? `${item}+` : item,
        )
        .join('')}&destinations=${destination
        .split(' ')
        .map((item, index) =>
          index !== destination.split(' ').length - 1 ? `${item}+` : item,
        )
        .join(
          '',
        )}&travel_mode=driving&key=AIzaSyB0YuGGEEhBYoT_EjKOu0u0b57NR43GGMQ`,
    );
    console.log(data.rows[0].elements[0]);
    return data.rows[0].elements[0].duration.value;
  }
  // Assumes first index is initial point of origin
  async optimizeRoute() {
    const routes = [
      '1780 E Yosemite Ave',
      '3501 McHenry Ave',
      '3401 Oakdale Rd',
      '2225 Plaza Pkwy',
      '3405 McHenry Ave',
    ];
    let optimizedRoute: string[] = [];
    let currentOrigin: string;
    for (let i = 0; i < routes.length - 1; i++) {
      if (!currentOrigin) {
        currentOrigin = routes[i];
      }
      const sortedDistances = await Promise.all(
        routes.map(async (address) => {
          if (currentOrigin !== address && address !== null) {
            return {
              addy: address,
              distanceFromOrigin: await this.findDistance(
                currentOrigin,
                address,
              ),
            };
          }
        }),
      ).then((value) =>
        value.sort((a, b) => a.distanceFromOrigin - b.distanceFromOrigin),
      );
      if (sortedDistances.map((item) => item !== undefined).length < 2) {
        routes.push(currentOrigin);
        break;
      }
      console.log(sortedDistances);
      optimizedRoute.push(sortedDistances[0].addy);
      routes[routes.indexOf(currentOrigin)] = null;
      currentOrigin = sortedDistances[0].addy;
    }
    console.log(optimizedRoute);
  }
}
