<h2> What are some differences between <strong>Interfaces</strong> and <strong>Types</strong> in TypeScript?</h2>

<p>
TypeScript-এ আমরা দু’টো জিনিস খুব বেশি দেখি—<code>interface</code> আর <code>type</code>।  
দুটোই দেখতে একই রকম এবং কাজেও অনেক সময় একে অপরের বিকল্প হিসেবে ব্যবহার করা যায়।  
কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে—
</p>

<br/>

<h3> ১) Structure ডিফাইন করা — দুটোই পারে</h3>
<p>
Object-এর shape কেমন হবে—এটা <code>interface</code> এবং <code>type</code> দুটোই দিয়ে লেখা যায়।
</p>

<br/>

<h3> ২) Interface সহজে Expand করা যায়</h3>
<p>
Interface সহজে merge হয়ে যায়, মানে একই নামে দুইবার লিখলে TypeScript স্বয়ংক্রিয়ভাবে একসাথে যুক্ত করে ফেলে।
</p>

<pre>
<code>interface User { name: string; }

interface User { age: number; }

// এখন User = { name: string; age: number }
</code>
</pre>

<p>
এই সুবিধাটি <strong>type alias</strong> নিয়ে করা যায় না।
</p>

<br/>

<h3> ৩) Type বেশি Flexible</h3>
<p>
Type alias দিয়ে union, intersection, primitive, function signature, tuple সহ আরও নানা কিছু করা যায়।
</p>

<pre>
<code>type ID = string | number;</code>
</pre>

<p>Interface দিয়ে primitive বা union টাইপ তৈরি করা যায় না।</p>

<br/>

<h3> ৪) Interface মূলত Object Structure-এর জন্য</h3>
<p>
Interface class এবং object-ভিত্তিক ডিজাইনে বেশি উপযোগী, তাই OOP স্টাইলে interface ব্যবহার বেশি স্বাভাবিক।
</p>

<br/>

<h3> ৫) Performance বা Runtime-এ কোনো প্রভাব নেই</h3>
<p>
দুটোই compile-time construct। JavaScript-এ এদের কোনো অস্তিত্ব থাকে না—তাই performance-এ কোনো পার্থক্য নেই।
</p>

<hr/>

<h1> Provide an example of using union and intersection types in TypeScript. </h1>

<p>
TypeScript-এ union এবং intersection খুব গুরুত্বপূর্ণ।  
দুটির উদ্দেশ্য সম্পূর্ণ আলাদা — নিচে উদাহরণসহ ব্যাখ্যা করা হলো।
</p>

<br/>

<h2> Union Type </h2>

<p>
Union টাইপ মানে variable একাধিক টাইপের যেকোনো একটিকে গ্রহণ করতে পারে।
</p>

<pre>
<code>type ID = number | string;

function printId(id: ID) {
  console.log("Your ID is:", id);
}

printId(10);
printId("A-102");
</code>
</pre>

<p>ID এখানে <strong>number</strong> বা <strong>string</strong> — যেকোনো একটিই হতে পারে।</p>

<br/>

<h2> Intersection Type </h2>

<p>
Intersection টাইপ দুই বা তার বেশি টাইপের সমস্ত property নিয়ে একটি নতুন টাইপ তৈরি করে।
</p>

<pre>
<code>type Person = { name: string; };

type Employee = { employeeId: number; };

type Staff = Person & Employee;

const user: Staff = {
  name: "Robin",
  employeeId: 101,
};
</code>
</pre>

<p><strong>Staff</strong> টাইপে এখন দুটো property-ই বাধ্যতামূলক — <code>name</code> এবং <code>employeeId</code>।</p>



