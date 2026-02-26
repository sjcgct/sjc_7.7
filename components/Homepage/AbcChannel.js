import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import { useTranslation } from "next-i18next";
const AbcChannel = () => {
  const { t } = useTranslation();
  return (
    <Canvas bgcolor="white">
      <Heading title={t("homepage.abcChannel")} />
      <div className="flex md:gap-y-8 md:my-4 p-6">
        <iframe
          className="aspect-video w-full h-auto"
          src="https://www.youtube.com/embed/msizPweg3kE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
      </div>
    </Canvas>
  );
};

export default AbcChannel;
