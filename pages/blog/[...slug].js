import { useRouter } from 'next/router';

const BlogPostsPage = () => {
  const router = useRouter();

  console.log(router.query);
  return <div>Blog Posts Page</div>;
};
export default BlogPostsPage;
