# Copilot Instructions

## Project Information

- This SDK provides reusable components for Fastify application servers
- The codebase follows a modular structure with clear separation of concerns

## Code standards and conventions

- Export patterns follow a consistent structure with named exports from index.ts files
- Modules are organized by feature and follow a modular export pattern
- Use TypeScript interfaces for defining data structures
- Document public functions with JSDoc comments describing their purpose
- Use return-early patterns to avoid unnecessary indents
- If statements that only return or throw should be on a single line
- Use the following docblock to the start a Typescript file:

```js
/**
 * @copyright 2025 Andrew Eddie. All rights reserved.
 */
```

## Framework & Dependencies

- Target node.js version is 22
- Fastify plugins use fastify-plugin and follow the Fastify plugin pattern
- Fastify plugins are organized in a modular way with clear responsibilities

## Testing

- Import from 'vitest', not 'jest'
- Always use `vi` for mocks and test utilities
- Test files reside in the same folder as the source file
- Suffix test files with `.test.ts`
- Tests use describe/it pattern with descriptive test names
- Tests should be comprehensive and cover edge cases
- Use expect assertions to validate function inputs and outputs
- Where possible, import the test file using the appropriate index.ts file
- **Important! Tests run in watch mode by default** - use `npm test -- --run` to run once without watching
