import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export const getAllUsers = async (req: Request, res: Response) => {
  const userService = new UserService();
  return res.json(await userService.getAllUsers());
};

export const getUserById = async (req: Request, res: Response) => {
  const userService = new UserService();
  const userId: string = req.params.id;
  return res.json(await userService.getUserById(userId));
};

export const postCreateNewUser = async (req: Request, res: Response) => {
  const userService = new UserService();
  const userData = req.body;
  console.log({ userData });
  return res.json(await userService.createNewUser(userData));
};

export const postUpdateExistingUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const newUserData = req.body;
  return res.json({ action: 'update existing user', userId, userData: newUserData });
};

export const deleteAllUsers = async (req: Request, res: Response) => {
  const userService = new UserService();
  await userService.deleteAllUsers();
  return res.json({ status: 'success' });
};