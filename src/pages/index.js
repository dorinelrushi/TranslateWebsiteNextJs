import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <h1>{t("HELLO_WORLD")}</h1>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>espanol</button>

      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}