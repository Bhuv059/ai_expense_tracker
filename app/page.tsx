import {currentUser} from "@clerk/nextjs/server";
import Guest from "@/(components)/Guest";


export default async function Home() {
    const user = await currentUser()

    if(!user) return <Guest />

  return (
    <main>
      <p>Home page</p>

    </main>
  );
}
