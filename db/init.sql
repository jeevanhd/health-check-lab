CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (customer_name, total_amount, status) VALUES
('Alice Smith', 150.50, 'Processing'),
('Bob Johnson', 45.00, 'Shipped'),
('Charlie Brown', 99.99, 'Delivered');
