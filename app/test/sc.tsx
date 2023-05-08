async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SC() {
  const data = await getData();

  return (
    <div className="m-5 bg-yellow-50 outline-1 outline-blue-900 text-black p-10">
      <h1 className="font-bold font-mono text-2xl">Server Component:</h1>
      <p>{data.title}</p>
    </div>
  );
}
