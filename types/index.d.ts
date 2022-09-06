import { Request } from "standalone-router";
import { ComponentType, SvelteComponentDev, SvelteComponentTyped } from "svelte/internal"
import { Writable } from "svelte/store";

export interface SvResponse {
  send: (component: ComponentType, props?: {}) => any,
  error: (props: any) => any
}

export type SvMiddlewareFn = (req: Request, res: SvResponse, next?: Function) => SvMiddlewareFn|undefined
export type SvRouterFn = (req: Request, res: SvResponse, props?: {}) => any

export interface SvMiddleware {
  use: SvMiddlewareFn,
  execute: (fn: SvMiddlewareFn) => any
}

export interface SvGetRouter {
  get(fn: SvRouterFn): Router;
  get(route: string, fn: SvRouterFn): Router;
  get(route: string, middlewares: Array<SvMiddlewareFn>, fn: SvRouterFn): Router;
}

export interface SvUseRouter {
  use(fn: SvRouterFn): Router;
}

export interface SvCatchRouter {
  catch(fn: SvRouterFn): Router;
  catch(route: string, fn: SvRouterFn): Router;
  catch(route: string, middlewares: Array<SvMiddlewareFn>, fn: SvRouterFn): Router;
}

export interface Router extends SvGetRouter, SvUseRouter, SvCatchRouter{}

export interface RouterComponentOptions{
  context?: Router;
}

/**
 * see [router.svelte](../router.svelte)
 */
export class RouterComponent extends SvelteComponentTyped<RouterComponentOptions>{}

interface RouterOptions {
  initial?: string, 
  base?: string,
  state?: Object
}
export function context(o: RouterOptions): Router;

export enum LinkOptionsType {
  navigate,
  redirect,
  replace,
  alter
}

export interface LinkOptions extends NavOptions {
  type?: LinkOptionsType
  title?: string
}
export interface Link {
  update: (o: LinkOptions) => void, 
  destroy: () => void
}
export function link(element: HTMLElement, props?: LinkOptions): Link;

export declare var location: Writable<Location>;

export type mount = () => Promise<void>;
export type destroy = () => void;

export function decorator(_layout: SvelteComponentDev): SvGetRouter;
export function decorator(_layout: SvelteComponentDev, ...middleware: [SvMiddlewareFn]): SvGetRouter;
export function decorator(context: Router, _layout: SvelteComponentDev, ...middleware: [SvMiddlewareFn]): SvGetRouter;

export function navigate(url: string, state?: {}): void;
export function redirect(url: string, state?: {}): void;
export function replace(url: string, state?: {}): void;
export function alter(url: string, state?: {}): void;

export interface NavOptions {
  to?: string,
  href?: string,
  state?: {}
}

export class Redirect extends SvelteComponentTyped<NavOptions>{}
export class Navigate extends SvelteComponentTyped<NavOptions>{}
export class Replace extends SvelteComponentTyped<NavOptions>{}
export class Alter extends SvelteComponentTyped<NavOptions>{}