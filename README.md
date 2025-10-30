# Student-Canteen-Online-Ordering-System
Online Ordering System for a student canteen. SWEN.383.501 G4


Student Canteen Online Ordering System



1. Project Description
Long queues and manual ordering in the campus canteen led to delays for students and increased workload for staff, sometimes resulting in missed or incorrect orders.
 To solve this, the project will develop a web-based Student Canteen Online Ordering System that allows students to browse the menu, add or remove items from their cart, place orders online, and receive automated notifications for successful or failed payments.
  Staff can update order statuses and manage menu items efficiently. This system will streamline the ordering process, reduce waiting times, prevent errors, and improve overall satisfaction for both students and canteen staff.



2. Project Scope
The Student Canteen Online Ordering System is intended as a small-scale, campus-focused web application that streamlines the process of ordering food and beverages. Its primary focus is on core functionalities that improve efficiency and user experience for both students and canteen staff.


Included in Scope:

•	User Management: Students can log in, manage their cart, and place orders. Staff members can log in and manage orders and menu items.

•	Menu Management: Staff can add, remove, or update menu items, including their name, price, and description. Students can browse available menu items.

•	Cart and Ordering System: Students can add or remove items from their cart, view totals, and place orders. Orders are created through an OrderFactory to ensure consistent creation logic.

•	Payment Processing: Supports multiple payment methods (Cash or Card) with success/failure handling. Payment outcomes trigger corresponding notifications.

•	Notifications: Students receive automated notifications for successful or failed orders via email or SMS.

•	Order Management: Staff can update order statuses, such as “Prepared,” “Paid,” or “Payment Failed,” ensuring accurate tracking of all orders.

•	Repository: All orders are saved in a repository that allows retrieval by student or overall for reporting purposes.


Out of Scope:

•	Multi-canteen or multi-campus integration

•	Advanced analytics or reporting beyond basic order history

•	Mobile app version (the system is web-based only)


Target Users:

•	Students: Browse the menu, manage cart items, place orders, and receive notifications.

•	Canteen Staff: Manage menu items, update order statuses, and ensure orders are processed efficiently.


Expected Benefits:

•	Reduced waiting time and queues during peak hours.

•	Minimized errors in order preparation and payment tracking.

•	Clear visibility of orders for staff and automated notifications for students.






D3

Anticipated design risks & how we’ll handle them


1) Adding features in payments & notifications

Risk: If we later add payment modes like Apple Pay/PayPal or push notifications, we’d have to modify the classes, which breaks Open–Closed and makes the code tightly coupled.


Our Plan:

Dependency Injection/Open-Closed Principle + polymorphism with IPaymentProcessor and INotificationChannel so the controller talks to interfaces, and we can inject the new modes.

Factory (PaymentProcessorFactory) to pick the right processor instead of big switch/case blocks.

NotificationService that fans out to channels via the interface (GRASP: Protected Variations, Low Coupling).



2) Domain leaking into infrastructure
Risk: If Order starts saving itself or sending emails, we’d violate SRP and couple business logic to tech details.


Our Plan: 


Introduce a Repository (IOrderRepository) as Pure Fabrication to isolate persistence.


Implement a GRASP Controller (OrderController) to coordinate the “place order” function while entities stay focused (High Cohesion).



3) Price changes breaking old orders

Risk: If a MenuItem price/name changes after purchase, old orders might recalc to the wrong totals.

Our Plan:


Use a Prototype/Snapshot approach: OrderItem stores a snapshot (menuItemSnapshot) made via MenuItem.clone() during building.


Follow Information Expert: totals live in OrderItem/Order, not in the controller.



4) Controller turning into a “god object”

Risk: The “place order” flow can get huge (validation, building, branching) and bloat the controller.


Our Plan:


Combining Builder + Factory (OrderBuilder, OrderFactory) to centralize construction/validation steps.


Adding Indirection (GRASP): the controller delegates creation, payment selection, notifications, and persistence to dedicated classes, keeping cohesion high and coupling low.

