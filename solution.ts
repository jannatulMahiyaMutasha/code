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

function getLength(value: string | (string | number)[]): number {
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
    return `'Name: ${this.name}, Age: ${this.age}'`;
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


function getUniqueValues<T extends string | number>(
  array1: T[],
  array2: T[]
): T[] {
  const result: T[] = [];
  let resultIndex = 0;

  for (let i = 0; i < array1.length; i++) {
    const value: T = array1[i]!; 
    let exists = false;

    for (let j = 0; j < resultIndex; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[resultIndex] = value;
      resultIndex++;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const value: T = array2[i]!; 
    let exists = false;

    for (let j = 0; j < resultIndex; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[resultIndex] = value;
      resultIndex++;
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
