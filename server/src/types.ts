import { Request, Response } from "express";
import { Session } from "express-session";
import { Redis } from "ioredis";
import { createUpdootLoader } from "./utils/createUpdootLoader";
import { createUserLoader } from "./utils/createUserLoader";

declare module "express-session" {
  export interface Session {
    userId: any;
  }
}
export type MyContext = {
  req: Request & { session: Session };
  res: Response;
  redis: Redis;
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};
