import { setUser } from "src/config";

export function handlerLogin(cmdName: string, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error(`Usage: ${cmdName} <username>`);
  }

  const username = args[0];

  setUser(username);
  console.log("User switched successfully!");
  console.log(`Current user: ${username}`);
}
