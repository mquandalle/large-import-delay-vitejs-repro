// The line below is causing the ~5s delay
import communes from "../../communes.json";

export async function get() {
  return { body: communes.length.toString() };
}
