# DESIGN PATTERN

## 1.1 Inversion of Control
- A design principle
- Instead of directly controlling and calling functions in another part, the control is inverted (shifted) to a central component or framework
## 1.2 Dependency Injection
- A design pattern
- Providing external dependencies to a component rather than letting the component create them

---

# NESTJS

## 2.Middleware

### 2.1 Definition
- Middleware is a function that can be executed before a request reaches a route handler
- Have access to request and response objects
- Can call the next middleware function in the stack
### 2.2 Use cases
Middleware is beneficial in various scenarios, including but not limited to:

- **Authentication and Authorization**: Verify user identity and permissions before allowing access to specific routes
- **Validation**: Ensure that incoming data complies with defined validation rules
- **Error Handling**: Catch and handle errors
- **Logging and Analytics**: Log incoming requests, monitor performance, and track usage
- **Request Transformation**: Modify or enhance request data for route handlers
### 2.3 Best practices
- Keep middleware functions focused on a single responsibility
- Avoid blocking operations
- Make sure to place middleware in the correct order in module configuration

## 3.Exception filter

### 3.1 Definition
- A centralized location to handle exceptions that may occur during the processing of a request
- Has built-in and custom filter
### 3.2 Use cases
- **Handle various exceptions**: HttpException, DbException,...
- **Transformation of exceptions**: Exception filters can transform exceptions into custom responses
- **Error Logging**: Catch and log errors
### 3.3 Best practices
- Centralized logging of exceptions, making it easier to track and analyze errors across the application
- Ensure that exception filters provide consistent and standardized

## 4.Pipes

### 4.1 Definition
- A class annotated with the @Injectable decorator that connecting medium between two segments
### 4.2 Use cases
- **Transformation**: Transforming some input data to another format.
- **Validation**: Evaluate input data and let it pass if the input is valid
### 4.3 Best practices
- Define data structure with DTOs for validation purpose
- Keep pipes focused on a single concern
- Create custom pipes for specific tasks
- Apply pipes at the appropriate level (global/controller/route/param).

## 5.Interceptor

### 5.1 Definition
- Intercept the execution flow of a request, allowing to perform operations such as logging, data transformation, or manipulation of the response
### 5.2 Use Cases
- **Pre-processing and Post-processing**: Interceptors can execute custom logic both before and after the main execution of a route handler
- **Transforming data**: For standardizing responses, converting data types
- **Logging**: Track request and response
### 5.3 Best practices
- Aware of the order in which they are applied, as it can impact the overall behavior of the application
- Create interceptors that are tailored to specific use cases, ensuring that their logic aligns with the intended purpose

## 6.Custom provider
NestJS allow to define Custom provider to handle special case in several ways
- **useValue**: Inject constant value, external library into Nest container
- **useClass**: Dynamic determine a class that a token should resolve to
- **useFactory**: Using factory function to create providers dynamically
- **useExisting**: Creating aliases for existing providers. This creates two ways to access the same provider

## 7.Circular dependency
Nest enables resolving circular dependencies between providers in two ways
- **Forward reference**: If 2 services depend each other, both sides can use @Inject() and the forwardRef() utility to resolve
```
  @Inject(forwardRef(() => CommonService))
```
- **Module forward reference**: Using forwardRef() utility on both sides of the modules association
```
@Module({
  imports: [forwardRef(() => CommonModule)],
})
```

## 8.Execution context
Nest has two classes which provide information about current execution
### 8.1 ArgumentsHost
A class for retrieving the arguments being passed to a handler
- getType(): return request method (http, rpc, graphql)
- switchToHttp(): return an HttpArgumentsHost instance that contain request, response, next object
### 8.2 ExecutionContext 
Extend from ArgumentHost, process additional detail about the current execution process
- getClass(): return type of controller
- getHandler(): return reference to a handler (method)
### 8.3 Reflection and metadata
Attach custom metadata to route handlers through decorators
- SetMetadata: attach value to metadata key
- Reflector.get(): access the metadata of controller or handler
- Reflector.getAllAndOverride(): override metadata has the same key
- Reflector.getAllAndMerge(): merge metadata has the same key

## 9.Lifecycle event
- OnModuleInit: Triggered once the module initialized
- OnApplicationBootstrap: Triggered after all modules are loaded, but before listening for connections
- OnModuleDestroy: Triggered once the module destroyed
- BeforeApplicationShutdown: Trigger after all OnModuleDestroy has completed. After that, app.close() called.
- OnApplicationShutdown: Triggered after connection close (app.close() called)

## 10.Configuration
The ConfigModule is an component of NestJS that facilitates the management and access of configuration parameters throughout an application.

### 10.1 Notable options
- **envFilePath**: specify multiple paths for .env
- **isGlobal**: register as a global module
- **cache**: cache value in memory to improve performance 
- **load**: load custom configuration file
### 10.2 Config service
Just inject `ConfigService` using constructor injection

---

# MongoDB
MongoDB offer several advantages when considered for use
- **Document-Oriented Databases**: record are stored as documents in compressed BSON files which can be retrieve directly in JSON format with many benefits
  - Can store nested JSON to data object
  - Documents map to objects in most popular programming languages
  - Has flexible and dynamic schema, easy to adding or removing field
- **Scale Cheaper**: have the flexibility to scale horizontally through sharding
  - Add more servers depending on your needs. So server don't need too big and it's cheaper than one large server with the same total capacity
  - No downtime required
- **Query faster**: when your data is stored together, there's no need to join with any other collection
- **Easy to change schema**: 

## 16.Replica set

### 