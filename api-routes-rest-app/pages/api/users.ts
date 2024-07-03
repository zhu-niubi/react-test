import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../interfaces";

// Fake users data
const users: User[] = [{ id: 1, name:'alice' }, { id: 2, name:'mike' }, { id: 3, name:'jack' }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  // Get data from your database
  res.status(200).json(users);
}
