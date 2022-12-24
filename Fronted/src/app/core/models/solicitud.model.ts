import {User} from "./user.model";
import {MascotaModel} from "./mascota.model";

export interface SolicitudModel {
  id: string,
  mascota: MascotaModel,
  adoptante: User,
  fechaSolicitud: Date,
  aceptada: boolean,
  enEspera: boolean,
  mensaje: string
}
