
**Orders Service**

The **Orders Service** is a backend microservice responsible for managing customer orders within a distributed microservices architecture.

This service exposes REST APIs that allow external clients or other services to create and manage orders. It is designed to work together with other services such as:

*   **Inventario** **Service**
*   **Sales Service**

The application is containerized with **Docker** and deployable in **Kubernetes** environments.

* * *

**Architecture**

This service is part of a microservices system exposed through an Ingress controller.

        Client (Postman / Frontend)
                        │
                        │
                        ▼
                    Ingress
                        │
        ┌───────────────┬───────────────┬───────────────┐
        │               │               │               |
        │               │               │               |
        ▼               ▼               ▼               ▼
    Inventario       Orders          Sales          Service


The **Orders Service** processes order creation requests and coordinates with other services when required.

* * *

**Features**

*   REST API for order creation
*   Accepts JSON request bodies
*   CORS enabled
*   Containerized using Docker
*   Deployable in Kubernetes
*   Designed for integration with other microservices

* * *

**Technologies**

*   Node.js
*   Express.js
*   Docker
*   Kubernetes
*   REST APIs

* * *

**API Endpoints**

Base URL (when exposed through Ingress):

http://localhost/api/orders

* * *

**Create a new order**

POST /api/orders

Example request:

{
    "productId": "123",
    "quantity": 2,
    "customer": "John Doe"
}

Example response:

{
    "message": "Order created successfully"
}

* * *

**Health Test Endpoint**

Some implementations include a simple endpoint to verify that the service is running.

GET /api/orders

Example response:

{

    "status": "Orders service running"

}

* * *

**Running the Project Locally**

**1 Clone the repository**

git clone https://github.com/sergioing1000/orders.git

cd orders

* * *

**2 Install dependencies**

npm install

* * *

**3 Start the application**

npm start

The service will run on:

http://localhost:3010

* * *

**Running with Docker**

Build the Docker image:

docker build -t orders-service .

Run the container:

docker run -p 3010:3010 orders-service

* * *

**Kubernetes Deployment**

The service can be deployed in a Kubernetes cluster using standard resources:

*   Deployment
*   Service
*   Ingress

Example:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
Once deployed, the service can be accessed through the configured Ingress endpoint.

* * *

**Testing with Postman**

Example request:

POST http://localhost/api/orders

Headers:
Content-Type: application/json

Body example:
{
    "productId": "A100",
    "quantity": 3
}

* * *

**Project Structure**

orders

│

├── Dockerfile

├── package.json

├── server.js

├── routes/

│

└── README.md

* * *

**Integration with Other Services**

The Orders Service may interact with:

*   **Inventario** **Service** to verify product availability
*   **Sales Service** to register completed transactions

These services communicate through HTTP APIs within the Kubernetes cluster.

* * *

**Future Improvements**

*   Database integration
*   Event-driven communication between services
*   API documentation using Swagger
*   Authentication and authorization
*   Observability (Prometheus / Grafana)

* * *

**Author**

Sergio Cruz  
Software Developer