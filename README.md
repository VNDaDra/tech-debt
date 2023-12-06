### 1.1.Inversion of Control
- A design principle
- Instead of directly controlling and calling functions in another part, the control is inverted (shifted) to a central component or framework
### 1.2 Dependency Injection
- A design pattern
- Providing external dependencies to a component rather than letting the component create them

## 2.Middleware

### 2.1 Definition
- Middleware is a function that can be executed before a request reaches a route handler
- Have access to request and response objects
- Can call the next middleware function in the stack

### 2.2 Use Cases
Middleware is beneficial in various scenarios, including but not limited to:

- **Authentication and Authorization**: Verify user identity and permissions before allowing access to specific routes
- **Validation**: Ensure that incoming data complies with defined validation rules
- **Error Handling**: Catch and handle errors
- **Logging and Analytics**: Log incoming requests, monitor performance, and track usage
- **Request Transformation**: Modify or enhance request data for route handlers

### 2.3 Best Practices
- Keep middleware functions focused on a single responsibility
- Avoid blocking operations
- Make sure to place middleware in the correct order in module configuration

## 3.Exception filter

### 3.1 Definition
- A centralized location to handle exceptions that may occur during the processing of a request
- Has built-in and custom filter

### 3.2 Use Cases

- **Handle various exceptions**: HttpException, DbException,...
- **Transformation of exceptions**: Exception filters can transform exceptions into custom responses
- **Error Logging**: Catch and log errors

### 3.3 Best Practices
- Centralized logging of exceptions, making it easier to track and analyze errors across the application
- Ensure that exception filters provide consistent and standardized

## 4.Pipes


## 5.Interceptor

### 5.1 Definition
- Intercept the execution flow of a request, allowing to perform operations such as logging, data transformation, or manipulation of the response

### 5.2 Use Cases

- **Pre-processing and Post-processing**: Interceptors can execute custom logic both before and after the main execution of a route handler
- **Transforming data**: For standardizing responses, converting data types
- **Logging**: Track request and response

### 5.3 Best Practices
- Aware of the order in which they are applied, as it can impact the overall behavior of the application
- Create interceptors that are tailored to specific use cases, ensuring that their logic aligns with the intended purpose