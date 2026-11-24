const calculateSalary = (employee, basicSalary, bonus) => {
  const totalSalary = basicSalary + bonus;
  const tax = totalSalary * 0.10;
  const netSalary = totalSalary - tax;

  console.log("Employee: " + employee);
  console.log("Basic Salary: " + basicSalary);
  console.log("Bonus: " + bonus);
  console.log("Tax: " + tax);
  return netSalary;
};

const employee1 = calculateSalary("Ram", 30000, 5000);
const employee2 = calculateSalary("Sita", 40000, 8000);

console.log("Ram's Salary: " + employee1);
console.log("Sita's Salary: " + employee2);
