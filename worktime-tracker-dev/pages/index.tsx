export default function Index() {

  console.log("ENV URL: " + process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
  return (
    <div>
      <h1>My page</h1>
      <p>Hello Next.js</p>
    </div>
  );
}