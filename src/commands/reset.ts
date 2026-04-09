import { deleteUsers } from "src/lib/db/queries/users";

export async function handlerReset(cmdName: string, ...args: string[]) {
  if (args.length !== 0) {
    throw new Error(`Usage: ${cmdName}`);
  }

  try {
    await deleteUsers();
    console.log("Database reset successfully!");
  } catch (err) {
    throw new Error(`Unable to delete all users: ${err}`);
  }
}
