import Link from "next/link";
import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import { linkResolver } from "../../prismic-configuration";
import { useTranslation } from "next-i18next";
const AlumspaceHomeCard = ({ item }) => {
  const { t } = useTranslation();
  const title = item.data.title?.[0]?.text || "Untitled";
  const alum = item.data.alum || "";
  const batch = item.data.batch || "";
  const department = item.data.department || "";
  const imageUrl = item.data.featured_image?.thumbnail?.url || item.data.featured_image?.url;

  return (
    <Link href={linkResolver(item)} passHref>
      <a className="block">
        <div className="flex flex-col">
          {imageUrl && (
            <div className="w-full h-48 md:h-56 overflow-hidden rounded-lg mb-3">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover rounded-lg transform transition duration-300 hover:scale-105"
              />
            </div>
          )}
          <h2 className="title text-lg md:text-xl mb-1 hover:text-[#1c2e4a] dark:hover:text-[#FDE7C9] transition-colors">{title}</h2>
          <p className="content-bold text-sm md:text-base">{alum}</p>
          {(batch || department) && (
            <p className="text-xs text-grey-500 mt-1">
              {batch && <span>Batch of {batch}</span>}
              {batch && department && <span> · </span>}
              {department && <span>{department}</span>}
            </p>
          )}
        </div>
      </a>
    </Link>
  );
};

const AlumSpace = ({ items }) => {
  const { t } = useTranslation();
  return (
    <Canvas bgcolor="white">
      <Heading title={t("homepage.alumspace")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-6 pb-8">
        {items && items.length > 0 ? (
          items.map((item) => (
            <AlumspaceHomeCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-grey-500 col-span-3 text-center py-10">
            No alumni features available yet.
          </p>
        )}
      </div>
    </Canvas>
  );
};

export default AlumSpace;
