import { MapRotation } from './Maprotation';

export interface MapRotations {
  battle_royale: { current: MapRotation; next?: MapRotation };
  arenas: { current: MapRotation; next?: MapRotation };
  ranked: { current: MapRotation; next?: MapRotation };
  arenasRanked: { current: MapRotation; next?: MapRotation };
}
