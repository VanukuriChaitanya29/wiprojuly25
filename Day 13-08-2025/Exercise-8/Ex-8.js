const employees = [
  { name: "Aarav Sharma",   role: "Manager",   empId: 101, salary: 120000 },
  { name: "Isha Rao",       role: "QA",        empId: 102, salary: 80000  },
  { name: "Vikram Singh",   role: "Developer", empId: 103, salary: 95000  },
  { name: "Neha Gupta",     role: "Manager",   empId: 104, salary: 135000 },
  { name: "Karan Mehta",    role: "Developer", empId: 105, salary: 90000  },
  { name: "Priya Nair",     role: "QA",        empId: 106, salary: 82000  },
  { name: "Rohit Verma",    role: "Manager",   empId: 107, salary: 128000 }
];


const totalManagerSalary = employees
  .filter(emp => emp.role === "Manager")
  .reduce((sum, emp) => sum + Number(emp.salary || 0), 0);


console.log("Total salary of Managers:", totalManagerSalary);
