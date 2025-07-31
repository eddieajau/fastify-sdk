/**
 * @copyright 2025 Andrew Eddie. All rights reserved.
 */

import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { getEnv } from '.'

describe('getEnv function', () => {
  const originalEnv = { ...process.env }

  beforeEach(() => {
    // Clear relevant environment variables before each test
    delete process.env.TEST_ENV_VAR
    delete process.env.ANOTHER_TEST_VAR
  })

  afterEach(() => {
    // Restore the original environment after each test
    process.env = { ...originalEnv }
  })

  it('should return the environment variable value when set', () => {
    process.env.TEST_ENV_VAR = 'test-value'
    expect(getEnv('TEST_ENV_VAR')).toBe('test-value')
  })

  it('should return the default value when environment variable is not set', () => {
    expect(getEnv('TEST_ENV_VAR', 'default-value')).toBe('default-value')
  })

  it('should return an empty string as default value when environment variable is not set and default is an empty string', () => {
    expect(getEnv('TEST_ENV_VAR', '')).toBe('')
  })

  it('should throw an error when environment variable is not set and no default is provided', () => {
    expect(() => getEnv('TEST_ENV_VAR')).toThrow('Env TEST_ENV_VAR must be set')
  })

  it('should prefer environment variable over default value when both are provided', () => {
    process.env.ANOTHER_TEST_VAR = 'actual-value'
    expect(getEnv('ANOTHER_TEST_VAR', 'default-value')).toBe('actual-value')
  })
})
