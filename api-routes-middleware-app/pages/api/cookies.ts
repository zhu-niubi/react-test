import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "../../utils/cookies";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // 使用“res”对象调用我们的纯函数，它将添加“set cookie”头
  setCookie(res, "Next.js", "api-middleware!");
  // 返回“set cookie”标头，以便我们可以在浏览器中显示它并显示它的工作原理！
  res.end(JSON.stringify(res.getHeader("Set-Cookie")));
}
