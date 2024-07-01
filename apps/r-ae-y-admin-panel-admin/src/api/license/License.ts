import { User } from "../user/User";

export type License = {
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  modules?: Array<"Option1">;
  updatedAt: Date;
  users?: Array<User>;
};
