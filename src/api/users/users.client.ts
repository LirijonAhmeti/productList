import { apiRequest } from "../Api";

import { GetAllUsersResponse } from "./users";

export const getAllUsers = () =>
  apiRequest<{}, GetAllUsersResponse>({ url: "users" });
