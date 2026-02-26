import Canvas from "../components/Generic/Canvas";
import Heading from "../components/Heading";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <Canvas bgcolor="white">
      <Heading title={t('navigation.about')} />

      <div className="max-w-3xl mx-auto px-6 pb-16">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="title text-2xl md:text-3xl mb-4">Our Mission</h2>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <h2 className="title text-2xl md:text-3xl mb-4">Our History</h2>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Founded in
            2010, the Students&apos; Journalism Council has been the voice of the
            student community for over a decade. What started as a small group
            of passionate writers has grown into a full-fledged media
            organization.
          </p>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-12">
          <h2 className="title text-2xl md:text-3xl mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-grey-200">
              <h3 className="title text-xl mb-2">Stories</h3>
              <p className="content text-grey-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We
                cover campus news, student achievements, and stories that
                matter.
              </p>
            </div>
            <div className="bg-white p-6 border border-grey-200">
              <h3 className="title text-xl mb-2">Humans of GCT</h3>
              <p className="content text-grey-600">
                Sed do eiusmod tempor incididunt ut labore. Personal stories
                and interviews with the people who make our campus vibrant.
              </p>
            </div>
            <div className="bg-white p-6 border border-grey-200">
              <h3 className="title text-xl mb-2">AlumSpace</h3>
              <p className="content text-grey-600">
                Ut enim ad minim veniam, quis nostrud exercitation. Connecting
                current students with alumni experiences and wisdom.
              </p>
            </div>
            <div className="bg-white p-6 border border-grey-200">
              <h3 className="title text-xl mb-2">Aperture</h3>
              <p className="content text-grey-600">
                Duis aute irure dolor in reprehenderit. Our visual newsletter
                capturing campus life through photography and design.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="title text-2xl md:text-3xl mb-4">Get in Touch</h2>
          <p className="content text-base md:text-lg leading-relaxed text-grey-700 mb-4">
            Have a story idea? Want to join the team? We&apos;d love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sjc@example.com"
              className="content-bold text-green hover:underline"
            >
              sjc@example.com
            </a>
            <span className="hidden sm:inline text-grey-400">|</span>
            <a
              href="https://instagram.com/sjc"
              target="_blank"
              rel="noopener noreferrer"
              className="content-bold text-green hover:underline"
            >
              @sjc on Instagram
            </a>
          </div>
        </section>
      </div>
    </Canvas>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
