// The line below is causing the ~5s delay
import communes from "@etalab/decoupage-administratif/data/communes.json";

export async function get() {
  return { body: communes.length.toString() };
}
