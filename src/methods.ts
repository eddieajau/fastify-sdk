/**
 * @copyright 2025 Andrew Eddie. All rights reserved.
 */

import {
  RouteHandlerMethod,
  RouteOptions,
  RouteHandler,
  RouteGenericInterface,
} from 'fastify'

type RouteOptionsWithoutMethodAndHandler = Omit<
  RouteOptions,
  'method' | 'handler' | 'url'
>

/**
 * Helper function to create route configurations with less boilerplate
 */
export function createRoute<
  T extends RouteGenericInterface = RouteGenericInterface
>(
  method: string,
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
): RouteOptions {
  return {
    method,
    handler: handler as RouteHandlerMethod, // Type assertion to satisfy TypeScript
    url: '/', // NOTE: The handler should not supply a URL because it would be added to the autoloaded route
    ...options,
  }
}

// HTTP method helpers
export const GET = <T extends RouteGenericInterface = RouteGenericInterface>(
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
) => createRoute<T>('GET', handler, options)

export const POST = <T extends RouteGenericInterface = RouteGenericInterface>(
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
) => createRoute<T>('POST', handler, options)

export const PUT = <T extends RouteGenericInterface = RouteGenericInterface>(
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
) => createRoute<T>('PUT', handler, options)

export const DELETE = <T extends RouteGenericInterface = RouteGenericInterface>(
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
) => createRoute<T>('DELETE', handler, options)

export const PATCH = <T extends RouteGenericInterface = RouteGenericInterface>(
  handler: RouteHandler<T> | RouteHandlerMethod,
  options: RouteOptionsWithoutMethodAndHandler = {}
) => createRoute<T>('PATCH', handler, options)
