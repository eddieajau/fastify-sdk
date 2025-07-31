/**
 * @copyright 2025 Andrew Eddie. All rights reserved.
 */

/**
 * Get environment variable value with optional default
 *
 * @param key - Environment variable name
 * @param defaultValue - Optional default value if environment variable is not set
 * @throws If the environment variable is not set and no default value is provided
 * @returns The environment variable value or the default value
 */
export function getEnv(key: string, defaultValue?: string): string {
  if (process.env[key]) {
    return process.env[key]
  } else if (defaultValue !== undefined) {
    return defaultValue
  }

  throw `Env ${key} must be set`
}
