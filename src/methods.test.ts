/**
 * @copyright 2025 Andrew Eddie. All rights reserved.
 */

import type { RouteOptions } from 'fastify'
import { describe, expect, it } from 'vitest'
import { createRoute, GET, POST, PUT, DELETE, PATCH } from '.'

describe('Method wrappers', () => {
  describe('createRoute function', () => {
    it('should create a route configuration with default options', () => {
      const handler = () => ({ success: true })
      const route = createRoute('GET', handler)

      expect(route).toEqual({
        method: 'GET',
        handler,
        url: '/',
      })
    })

    it('should create a route configuration with custom options', () => {
      const handler = () => ({ success: true })
      const options = {
        schema: {
          response: {
            200: {
              type: 'object',
              properties: {
                success: { type: 'boolean' },
              },
            },
          },
        },
      }

      const route = createRoute('POST', handler, options)

      expect(route).toEqual({
        method: 'POST',
        handler,
        url: '/',
        ...options,
      })
    })
  })

  describe('HTTP method helpers', () => {
    // Test all HTTP method helpers: GET, POST, PUT, DELETE, PATCH
    const methods = [
      { fn: GET, method: 'GET' },
      { fn: POST, method: 'POST' },
      { fn: PUT, method: 'PUT' },
      { fn: DELETE, method: 'DELETE' },
      { fn: PATCH, method: 'PATCH' },
    ]

    methods.forEach(({ fn, method }) => {
      it(`${method} should create a route with the ${method} method`, () => {
        const handler = () => ({ success: true })
        const route = fn(handler) as RouteOptions

        expect(route.method).toBe(method)
        expect(route.handler).toBe(handler)
        expect(route.url).toBe('/')
      })

      it(`${method} should pass options to createRoute`, () => {
        const handler = () => ({ success: true })
        const options = {
          schema: {
            response: {
              200: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                },
              },
            },
          },
        }

        const route = fn(handler, options) as RouteOptions

        expect(route.method).toBe(method)
        expect(route.handler).toBe(handler)
        expect(route.url).toBe('/')
        expect(route.schema).toEqual(options.schema)
      })
    })
  })
})
