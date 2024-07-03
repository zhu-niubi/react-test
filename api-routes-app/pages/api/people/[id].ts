import { NextApiRequest, NextApiResponse } from "next";
import { people } from "../../../data";
import type { Person, ResponseError } from "../../../interfaces";

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Person | ResponseError>,
) {
  //根据人员id查询详情
  const { query } = req;
  const { id } = query;
  const person = people.find((p) => p.id === id);

  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
