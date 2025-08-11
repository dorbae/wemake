import type { MetaFunction } from "react-router";

export interface Route {
  LoaderArgs: {
    request: Request;
    params: Record<string, string>;
  };
  ActionArgs: {
    request: Request;
    params: Record<string, string>;
  };
  ComponentProps: {
    loaderData: any;
    actionData?: any;
  };
  MetaFunction: MetaFunction;
}
