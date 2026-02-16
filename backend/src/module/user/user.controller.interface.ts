export interface UsercontrollerInterface {
  createUser(req: Request, res: Response): Promise<void>;
  updateUser(req: Request, res: Response): Promise<void>;
}

