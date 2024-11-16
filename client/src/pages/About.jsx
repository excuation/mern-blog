export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-800'>
      <div className='max-w-2xl mx-auto p-6 text-center text-white'>
        <div>
          <h1 className='text-4xl font-semibold text-teal-400 my-7'>
            About Programmer Blog
          </h1>
          <div className='text-lg text-gray-300 flex flex-col gap-6'>
            <p>
              At Programmer Blog, we believe in:
              <br />
              <span className='text-teal-300'>Quality First:</span> Delivering products and services that exceed expectations.
              <br />
              <span className='text-teal-300'>Customer Focus:</span> Building lasting relationships through trust and satisfaction.
              <br />
              <span className='text-teal-300'>Innovation:</span> Staying ahead by embracing creativity and technology.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Coding programmer is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
