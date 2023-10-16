

const BlogsLayout = ({title,description,link}) => {
  return (
    <>
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white px-4 pb-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-2 w-80 text-xs text-gray-600 truncate">
             {description}

            </p>
            <div>
              <a
                className=" font-medium text-xs text-brand-500 hover:text-brand-500 dark:text-submitButtonBgColor"
                href=" "
              >
                Read more
              </a>
              </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default BlogsLayout;