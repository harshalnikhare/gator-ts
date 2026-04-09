import { setUser } from "src/config";
import { createUser, getUser } from "src/lib/db/queries/users";

export async function handlerLogin(cmdName: string, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error(`Usage: ${cmdName} <username>`);
  }

  const username = args[0];

  const existingUser = await getUser(username);

  if (!existingUser) {
    throw new Error(`User: ${username} not found`);
  }
  setUser(existingUser.name);
  console.log("User switched successfully!");
  console.log(`Current user: ${username}`);
}

export async function handlerRegister(cmdName: string, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error(`Usage: ${cmdName} <username>`);
  }

  const name = args[0];

  try {
    const user = await createUser(name);
    setUser(user.name);
    console.log("User switched successfully!");
    console.log(`Current user: ${name}`);
  } catch (err) {
    throw new Error(`Unalbe to create user: ${name}`);
  }
}
