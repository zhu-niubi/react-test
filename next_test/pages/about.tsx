import Header from "../components/header";
import { useRouter } from 'next/router'

export default function AboutPage() {
  const router = useRouter();


  return (
    <>
      <Header />
      <h1>About page</h1>
      <button onClick={() => router.push(`/post/three/three-comment`)}>
        Click here to read more
      </button>
    </>
  );
}
// export default function About() {
//   return <div>About us</div>;
// }