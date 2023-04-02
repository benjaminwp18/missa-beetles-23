import type { User } from "@prisma/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params: { id } }) => {
  const response = await fetch(`/api/user/${id}`);

  return {
	  user: (await response.json()) as User
  };
};
