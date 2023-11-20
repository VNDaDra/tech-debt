## Inversion of Control
- A design principle
- Instead of directly controlling and calling functions in another part, the control is inverted (shifted) to a central component or framework

## Middleware

### Definition
- Middleware is a function that can be executed before a request reaches a route handler.
- Have access to request and response objects
- Can call the next middleware function in the stack

### Use Cases
Middleware is beneficial in various scenarios, including but not limited to:

- **Authentication and Authorization**: Verify user identity and permissions before allowing access to specific routes
- **Validation**: Ensure that incoming data complies with defined validation rules
- **Error Handling**: Catch and handle errors
- **Logging and Analytics**: Log incoming requests, monitor performance, and track usage
- **Request Transformation**: Modify or enhance request data for route handlers

### Best Practices
- Keep middleware functions focused on a single responsibility
- Avoid blocking operations
- Make sure to place middleware in the correct order in module configuration