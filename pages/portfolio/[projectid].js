import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // Can send a request to some backend server to fetch piece of data with an id of router.query.projectid

  return <div>Portfolio Project Page</div>;
};
export default PortfolioProjectPage;
