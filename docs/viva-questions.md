# BizFlow — sample MCA AIT viva questions

1. **What is BizFlow?**  
   A web-based business operations system for inventory, sales, purchases, expenses and basic analytics.

2. **Why Django REST Framework?**  
   It provides serializers, validation, authentication and structured REST endpoints while allowing a separate React client.

3. **Why React?**  
   React supports reusable components and a responsive single-page interface.

4. **Why MySQL?**  
   The project contains related business entities and benefits from relational integrity, joins and transactions.

5. **How does React communicate with Django?**  
   Axios sends HTTP requests to REST endpoints and receives JSON responses.

6. **How is authentication handled?**  
   JWT access and refresh tokens are provided by Simple JWT. Protected endpoints require an access token.

7. **How is stock reduced after a sale?**  
   The backend validates stock, creates the sale and its items, updates product quantities and writes stock movement rows in one database transaction.

8. **Why use a database transaction?**  
   To prevent partial operations, such as recording a sale without updating inventory.

9. **What is a foreign key?**  
   A relational constraint that references a row in another table and helps preserve referential integrity.

10. **Why use DecimalField for money?**  
    Decimal arithmetic avoids common binary floating-point rounding problems in monetary calculations.

11. **How is low stock identified?**  
    A product is flagged when its current stock is less than or equal to its configured minimum stock threshold.

12. **How is estimated net profit calculated?**  
    Recorded sales total minus the captured cost of goods sold and recorded operating expenses for the same period.

13. **Is the current profit number formal accounting?**  
    No. It is an educational estimate and does not replace a complete accounting and inventory valuation system.

14. **What is a REST API?**  
    An HTTP interface that exposes resources and operations using methods such as GET and POST.

15. **What would you improve next?**  
    Automated tests, staff memberships, PDF invoices, CSV exports, advanced filtering, audit logs, tax configuration and production deployment hardening.
