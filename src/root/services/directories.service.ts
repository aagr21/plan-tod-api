import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Directory } from '@root/models/entities';
import { TreeRepository } from 'typeorm';

@Injectable()
export class DirectoriesService {
  constructor(
    @InjectRepository(Directory)
    private readonly directoriesRepository: TreeRepository<Directory>,
  ) {}

  async findAll() {
    return await this.directoriesRepository.findTrees();
  }

  async seed() {
    const directories: Directory[] = [
      {
        name: '2024',
        children: [
          {
            name: 'Cámaras',
            children: [
              {
                name: 'RESPUESTA A SOLICITUD DE INFORMACIÓN PARA MEJORAR LA SEGURIDAD Y EL FLUJO VEHICULAR EN EL GAMSCZ.pdf',
                isFile: true,
              },
            ],
          },
          {
            name: 'Estudio de Tráfico',
          },
          {
            name: 'Int. Operadores',
          },
          {
            name: 'Medio Ambiente',
            children: [
              {
                name: 'HOJA DE RUTA INTERNA.pdf',
                isFile: true,
              },
              {
                name: 'INF. TEC. RESPUESTA SOLICITUD DE INFORMACIÓN ACTUALIZADA.pdf',
                isFile: true,
              },
              {
                name: 'RESPUESTA SOLICITUD DE INFORMACIÓN ACTUALIZADA.pdf',
                isFile: true,
              },
              {
                name: 'SOLICITUD DE INFORMACIÓN ACTUALIZADA.pdf',
                isFile: true,
              },
            ],
          },
          {
            name: 'Reductores',
            children: [
              {
                name: 'RESPUESTA A C.I. 531-2024 DPTO.P.P.P.M.U. SOLICITUD DE INFORMACIÓN PARA EL MEJORAMIENTO DEL FLUJO VEHICULAR EN EL GAMSCZ.pdf',
                isFile: true,
              },
              {
                name: 'RESPUESTA A LA SOLICITUD DE INFORMACIÓN PARA PROPUESTA DE MEJORAMIENTO DE LA SEGURIDAD VIAL EN EL GAMSC.pdf',
                isFile: true,
              },
              {
                name: 'SOLICITUD DE INFORMACIÓN PARA PROPUESTA DE MEJORAMIENTO DE LA SEGURIDAD VIAL EN EL GAMSCS.pdf',
                isFile: true,
              },
            ],
          },
          {
            name: 'Semáforos',
            children: [
              {
                name: 'SOLICITUD DE INFORMACIÓN PARA EL MEJORAMIENTO DEL FLUJO VEHICULAR EN EL GAMSCS.pdf',
                isFile: true,
              },
            ],
          },
          {
            name: 'SMOP - Drenaje',
            children: [
              {
                name: 'RESPUESTA A SOLICITUD DE INFORMACIÓN ACTUALIZADA DE LA RED DE DRENAJE DEL GAMSCS CON DATOS DE TIPOS DE ESTRUCTURAS.pdf',
                isFile: true,
              },
              {
                name: 'SOLICITUD DE INFORMACIÓN ACTUALIZADA DE LA RED DE DRENAJE DEL GAMSCS CON DATOS DE TIPOS DE ESTRUCTURAS.pdf',
                isFile: true,
              },
            ],
          },
          {
            name: 'SMOP - Pavimentos',
            children: [
              {
                name: 'RESPUESTA A SOLICITUD DE INFORMACIÓN ACTUALIZADA DE LA RED VIAL DEL GAMSCS CON DATOS DE TIPOS DE PAVIMENTO.pdf',
                isFile: true,
              },
              {
                name: 'SOLICITUD DE INFORMACIÓN ACTUALIZADA DE LA RED VIAL DEL GAMSCS CON DATOS DE TIPOS DE PAVIMENTO.pdf',
                isFile: true,
              },
            ],
          },
        ],
      },
    ];
    return this.directoriesRepository.save(directories, { reload: true });
  }
}
