function filterStudents(arr) {
  return arr.filter((ar) => ar.marks >= 50);
}

// Basic Test Case with All Passing Marks
console.log(filterStudents([{ name: 'John', marks: 85 }, { name: 'Jane', marks: 90 }]));
// Expected Output: [{ name: 'John', marks: 85 }, { name: 'Jane', marks: 90 }]

// Basic Test Case with All Failing Marks
console.log(filterStudents([{ name: 'John', marks: 45 }, { name: 'Jane', marks: 40 }]));
// Expected Output: []

// Test Case with Mixed Passing and Failing Marks
console.log(filterStudents([{ name: 'John', marks: 85 }, { name: 'Jane', marks: 40 }, { name: 'Jack', marks: 95 }]));
// Expected Output: [{ name: 'John', marks: 85 }, { name: 'Jack', marks: 95 }]

// Test Case with Marks Exactly on the Threshold
console.log(filterStudents([{ name: 'John', marks: 50 }, { name: 'Jane', marks: 49 }]));
// Expected Output: [{ name: 'John', marks: 50 }]

// Test Case with an Empty Array
console.log(filterStudents([]));
// Expected Output: []

// Test Case with One Student (Passing)
console.log(filterStudents([{ name: 'John', marks: 80 }]));
// Expected Output: [{ name: 'John', marks: 80 }]

// Test Case with One Student (Failing)
console.log(filterStudents([{ name: 'John', marks: 30 }]));
// Expected Output: []

// Test Case with Multiple Students with a Range of Marks
console.log(filterStudents([
  { name: 'John', marks: 60 },
  { name: 'Jane', marks: 40 },
  { name: 'Jack', marks: 70 },
  { name: 'Jill', marks: 55 },
]));
// Expected Output: [{ name: 'John', marks: 60 }, { name: 'Jack', marks: 70 }, { name: 'Jill', marks: 55 }]

// Test Case with Passing and Failing Students, with Different Object Keys
console.log(filterStudents([
  { studentName: 'John', score: 85 },
  { studentName: 'Jane', score: 40 },
  { studentName: 'Jack', score: 95 },
]));
// Expected Output: [{ studentName: 'John', score: 85 }, { studentName: 'Jack', score: 95 }]

// Test Case with Students Who Have No Marks
console.log(filterStudents([{ name: 'John' }, { name: 'Jane' }]));
// Expected Output: []

// Test Case with Students Having Non-Numeric Marks
console.log(filterStudents([{ name: 'John', marks: 'eighty' }, { name: 'Jane', marks: 90 }]));
// Expected Output: [{ name: 'Jane', marks: 90 }]

// Test Case with Large Number of Students
console.log(filterStudents(
  Array.from({ length: 1000 }, (_, i) => ({ name: `Student${i + 1}`, marks: i % 2 === 0 ? 60 : 40 }))
));
// Expected Output: Students with marks >= 50

// Test Case with Different Passing Threshold (e.g., 60)
console.log(filterStudents([{ name: 'John', marks: 60 }, { name: 'Jane', marks: 59 }, { name: 'Jack', marks: 70 }]));
// Expected Output: [{ name: 'John', marks: 60 }, { name: 'Jack', marks: 70 }]
