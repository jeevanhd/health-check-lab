# Orders API Architecture

The Orders API is a simple Node.js application that uses Express to expose HTTP endpoints and connects to a PostgreSQL database to manage order data.

## Components

- **orders-api**: A Node.js/Express service handling incoming requests.
- **db**: A PostgreSQL 16 database storing the `orders` table.

## Data Flow

1. Client requests an endpoint (e.g., `GET /orders`).
2. The `orders-api` service receives the request.
3. The service executes a query against the `db` PostgreSQL database.
4. The database returns the query results.
5. The service formats the results as JSON and sends the HTTP response back to the client.
