import { PrismicRichText } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-black dark:text-white my-6 font-sans">
      <PrismicRichText
        field={slice.primary.quote}
        components={{
          paragraph: ({ children }) => (
            <p className="mb-2 font-sans">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold font-sans">
              {children}
            </strong>
          ),
        }}
      />
    </blockquote>
  );
};

export default Quote;