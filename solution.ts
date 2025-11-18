function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  }
  return "The provided input value is not accepted";
}


function getLength<T>(value: string | T[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: '${this.name}, Age: ${this.age}'`;
  }
}

interface IBooks {
  title: string;
  rating: number;
}

function filterByRating(books: IBooks[]): IBooks[] {
  return books.filter((item) => item.rating >= 4);
}

interface IUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: IUsers[]): IUsers[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues<X, Y>(array1: X[], array2: Y[]): (X | Y)[] {
  const result: (X | Y)[] = [];
  const newArray = [...array1, ...array2];

  for (let i = 0; i < newArray.length; i++) {
    let isExist = false;

    for (let j = 0; j < result.length; j++) {
      if (newArray[i] === result[j]) {
        isExist = true;
      }
    }
    if (!isExist) {
      result.push(newArray[i]);
    }
  }

  return result;
}

interface IProducts {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
function calculateTotalPrice(products: IProducts[]): number {
  const totalPrice = products.reduce((acc, item) => {
    const discount = item.discount || 0;
    const result = item.price * item.quantity * (1 - discount / 100);
    return acc + result;
  }, 0);
  return totalPrice;
}