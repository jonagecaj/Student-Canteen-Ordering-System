class User {
  constructor({ id, name, email, passwordHash }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
  }

  getRole() {
    return this.constructor.name;
  }
}

class Student extends User {
  constructor({ id, name, email, passwordHash, studentId, phoneNumber }) {
    super({ id, name, email, passwordHash });
    this.studentId = studentId;
    this.phoneNumber = phoneNumber;
  }
}

class Staff extends User {
  constructor({ id, name, email, passwordHash, staffRole }) {
    super({ id, name, email, passwordHash });
    this.staffRole = staffRole;
  }
}

class UserRepository {
  findByEmail(email) {
    throw new Error("Not implemented");
  }

  save(user) {
    throw new Error("Not implemented");
  }
}

class LocalUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = new Map(); // email -> User
  }

  findByEmail(email) {
    return this.users.get(email) || null;
  }

  save(user) {
    this.users.set(user.email, user);
    return user;
  }

  findById(id) {
    for (const user of this.users.values()) {
      if (user.id === id) return user;
    }
    return null;
  }

  getAll() {
    return Array.from(this.users.values());
  }
}

class AuthenticationManager {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  registerStudent({ name, email, passwordHash, studentId, phoneNumber }) {
    const existingUser = this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const student = new Student({
      id: this._generateId(),
      name,
      email,
      passwordHash,
      studentId,
      phoneNumber
    });

    return this.userRepository.save(student);
  }

  registerStaff({ name, email, passwordHash, staffRole }) {
    const existingUser = this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const staff = new Staff({
      id: this._generateId(),
      name,
      email,
      passwordHash,
      staffRole
    });

    return this.userRepository.save(staff);
  }

  login(email, password) {
    const user = this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // In a real system, you would hash and compare passwords
    if (user.passwordHash !== password) {
      throw new Error("Invalid email or password");
    }

    return user;
  }

  _generateId() {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}