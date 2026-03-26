import { readConfig, setUser } from "./config";

function main() {
  setUser("Harshal");
  const cfg = readConfig();
  console.log(cfg);
}

main();
