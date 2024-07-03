import Header from "../components/header";

export default function IndexPage() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
    </>
  );
}

// import { useRouter } from "next/router";
// import Link from "next/link";
// import { format } from "url";

// let counter = 0;

// export async function getServerSideProps() {
//   counter++;
//   return { props: { initialPropsCounter: counter } };
// }

// export default function Index({ initialPropsCounter }) {
//   const router = useRouter();
//   const { pathname, query } = router;
//   const reload = () => {
//     console.log(pathname, query);
//     router.push(format({ pathname, query }));
//   };
//   const incrementCounter = () => {
//     // console.log(query);
//     const currentCounter = query.counter ? parseInt(query.counter) : 0;
//     const href = `/?counter=${currentCounter + 1}`;

//     router.push(href, href, { shallow: true });
    
//   };

//   return (
//     <div>
//       <h2>This is the Home Page</h2>
//       <Link href="/about">About</Link>
//       <button onClick={reload}>Reload</button>
//       <button onClick={incrementCounter}>Change State Counter</button>
//       <p>"getServerSideProps" ran for "{initialPropsCounter}" times.</p>
//       <p>Counter: "{query.counter || 0}".</p>
//     </div>
//   );
// }