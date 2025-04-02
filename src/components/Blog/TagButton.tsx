const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-black mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-[#a31d1d] hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-[#a31d1d]"
    >
      {text}
    </a>
  );
};


export default TagButton;
