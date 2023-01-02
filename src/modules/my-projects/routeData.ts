import { createRouteData } from "solid-start";
import { fetchProjectsList } from "./services";

export const routeData = () => {
  const data = createRouteData(async () => {
    return await fetchProjectsList();
  });
  return data;
};
