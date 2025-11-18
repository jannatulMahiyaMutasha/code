# What are some differences between interfaces and types in TypeScript?

TypeScript-এ আমরা দু’টো জিনিস খুব বেশি দেখি—interface আর type। দুটোই দেখতে অনেকটা একই রকম, আবার কাজেও অনেক জায়গায় একে-অপরের বিকল্প হিসেবে ব্যবহার করা যায়। তবুও কিছু সূক্ষ্ম পার্থক্য আছে, যেগুলো জানলে কোড আরও পরিষ্কারভাবে লিখতে সুবিধা হয়।

১) Structure ডিফাইন করা—দুটোই পারে

অবজেক্টের শেপ কেমন হবে, কোন কোন প্রোপার্টি থাকবে—এটা interface ও type দুটো দিয়েই লেখা যায়। তাই এই দিক থেকে একটার তুলনায় আরেকটা শক্তিশালী নয়।

২) Interface সহজে Expand করা যায়

Interfaces সাধারণত “বাড়ানো” খুব সহজ। মানে, একই নামে আবার লিখলে TypeScript সেটা.merge করে ফেলে। যেমন:

interface User {
  name: string;
}

interface User {
  age: number;
}

দুটো মিলেই এখন একটাই User হবে।
Type alias-এর ক্ষেত্রে এটা করা যায় না।

৩) Type বেশি Flexible

Type alias দিয়ে আমরা অনেক রকম কাজ করতে পারি—
union, intersection, primitive type, function signature, tuple—সবই করা যায়।

type ID = string | number;

Interface দিয়ে union/primitive টাইপ বানানো যায় না।

৪) Interface মূলত Object শেপের জন্য

Interface-এর ডিজাইন আসলে object এবং class structure-এর জন্য বেশি উপযোগী। তাই ক্লাস-বেইজড ডিজাইনে interface একটু বেশি স্বাভাবিক লাগে।

৫) Performance বা Runtime-এ কোনোই প্রভাব নেই

এটা কমন ভুল ধারণা যে এর মধ্যে performance পার্থক্য আছে। আসলে দুটোই compile-time জিনিস, JavaScript-এ এদের কোনো অস্তিত্ব থাকে না।



# Provide an example of using union and intersection types in TypeScript?

TypeScript-এ union আর intersection দুইটাই খুব কাজে লাগে, কিন্তু কাজ দু’টো একদম আলাদা। নিচে ছোট উদাহরণ দিলে ব্যাপারটা পরিষ্কার হয়ে যাবে।


1. Union Type — একাধিক টাইপের যেকোনো একটাকে অনুমতি দেয়

Union মানে “এটা অথবা সেটা”।
ধরুন, একটা ID কখনো number আবার কখনো string হতে পারে:

type ID = number | string;

function printId(id: ID) {
  console.log("Your ID is:", id);
}

printId(10);
printId("A-102");

এখানে ID হতে পারে number কিংবা string — দুটোই valid।




 2. Intersection Type — দুইটা টাইপ মিলে একটিতে পরিণত হয়

Intersection মানে “এবং”— অর্থাৎ দুই টাইপের সব প্রপার্টি মিলিয়ে একটা নতুন টাইপ।

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const user: Staff = {
  name: "Robin",
  employeeId: 101,
};

এখন Staff টাইপে দুটো টাইপের সব properties পাওয়া যাবে — name এবং employeeId দুটোই দিতে হবে।
