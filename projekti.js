class User {
  constructor({ userId, name, email }) {
    
  }
  login() {}
  logout() {}
}

class Student extends User {
  constructor(props) {
    
  }
  addToCart(menuItem, qty) {}
  removeFromCart(menuItemId) {}
}

class Staff extends User {
  constructor(props) {
    
  }
  manageOrders() {}
  manageMenuItems() {}
  updateOrderStatus(orderId, status) {}
  addMenuItem(data) {}
  updateMenuItem(itemId, changes) {}
  removeMenuItem(itemId) {}
}

class MenuItem {
  constructor({ itemId, name, description, price }) {
   
  }
}

class MenuCatalog {
  constructor() {
    
  }
  listAll() {}
  addItem(menuItem) {}
  updateItem(menuItem) {}
  removeItem(itemId) {}
}

class CartItem {
  constructor({ menuItem, quantity }) {
   
  }
  getTotal() {}
}

class Cart {
  constructor() {
    
  }
  addItem(menuItem, qty) {}
  removeItem(menuItemId) {}
  getTotal() {}
  reset() {}
}

class OrderItem {
  constructor({ menuItemSnapshot, quantity }) {
    
  }
  getTotal() {}
}

class Order {
  constructor({ student, items, paymentMethod }) {
    
  }
  calculateTotal() {}
  updateStatus(status) {}
}

class IPaymentProcessor {
  processPayment(order) {
    throw new Error("Not implemented");
  }
}

class CashPayment extends IPaymentProcessor {
  processPayment(order) {
    throw new Error("Not implemented");
  }
}

class CardPayment extends IPaymentProcessor {
  processPayment(order) {
    throw new Error("Not implemented");
  }
}

class PaymentProcessorFactory {
  static create(type) {
    throw new Error("Not implemented");
  }
}

class INotificationChannel {
  sendConfirmation(order) {
    throw new Error("Not implemented");
  }
  sendFailure(order) {
    throw new Error("Not implemented");
  }
}

class EmailNotification extends INotificationChannel {
  sendConfirmation(order) {}
  sendFailure(order) {}
}

class SMSNotification extends INotificationChannel {
  sendConfirmation(order) {}
  sendFailure(order) {}
}

class NotificationService {
  constructor(channels = []) {
   
  }
  sendConfirmation(order) {}
  sendFailure(order) {}
}

class IOrderRepository {
  save(order) {
    throw new Error("Not implemented");
  }
  getAll() {
    throw new Error("Not implemented");
  }
  getByStudent(student) {
    throw new Error("Not implemented");
  }
  read(orderId) {
    throw new Error("Not implemented");
  }
}

class InMemoryOrderRepository extends IOrderRepository {
  constructor() {
    
  }
  save(order) {
    throw new Error("Not implemented");
  }
  getAll() {
    throw new Error("Not implemented");
  }
  getByStudent(student) {
    throw new Error("Not implemented");
  }
  read(orderId) {
    throw new Error("Not implemented");
  }
}

class OrderBuilder {
  constructor() {
   
  }
  withStudent(student) {
    return this;
  }
  withPaymentMethod(method) {
    return this;
  }
  fromCart(cart) {
    return this;
  }
  build() {
    throw new Error("Not implemented");
  }
}

class OrderFactory {
  static createFromCart(student, cart, method) {
    throw new Error("Not implemented");
  }
}

class OrderController {
  constructor({ orderRepository, notificationService }) {
    
  }

  placeOrder({ student, paymentMethod }) {
    throw new Error("Not implemented");
  }
}

class StudentUI {
  listMenu(menuCatalog) {}
  addToCart(student, item, qty) {}
  viewCartTotal(cart) {}
  placeOrder(orderController, payload) {}
}

class StaffUI {
  viewAllOrders(repo) {}
  requestStatusUpdate(staff, orderId, status) {}
  addMenu(staff, data) {}
  updateMenu(staff, itemId, changes) {}
  removeMenu(staff, itemId) {}
}
