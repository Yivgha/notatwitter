export async function getStaticProps() {
  return {
    props: {
      message: 'This is a static page',
    },
  };
}

const Page = ({ message }) => {
  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
};

export default Page;
