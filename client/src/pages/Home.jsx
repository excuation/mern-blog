import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-100 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to My Blog</h1>
          <p className="text-sm md:text-lg font-light">
            Dive into a world of insightful articles, tutorials, and discussions about web development, software engineering, and programming languages.
          </p>
          <div className="mt-10">
          <Link
            to="/search"
            className="bg-white text-teal-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200 transition duration-200"
          >
            Explore All Posts
          </Link>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-purple-100 via-gray-50 to-purple-50 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-100 dark:to-gray-800 py-6">
  <CallToAction />
</div>


      {/* Recent Posts Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {posts && posts.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/search"
                className="text-teal-600 text-lg font-bold hover:underline"
              >
                View All Posts
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
