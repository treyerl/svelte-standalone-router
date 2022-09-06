import { Router } from './SvelteStandaloneRouter.js';
import context, { location, mount, destroy } from './router.js';
import RouterComponent from './router.svelte';
import link from './link.js';
import decorator from './decorator.js';
import { redirect, navigate, replace, alter } from './helpers.js';

import Redirect from './redirect.svelte';
import Navigate from './navigate.svelte';
import Replace from './replace.svelte';
import Alter from './alter.svelte';


// js implementations
export { 
  // Router globals
  Router,
  // api
  context,
  link,
  location,
  mount, 
  destroy,
  decorator,
  // helpers
  redirect,
  navigate,
  replace,
  alter,
  // svelte components
  RouterComponent,
  Redirect,
  Navigate,
  Replace,
  Alter
 };