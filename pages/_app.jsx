import "../styles/globals.css";
import "@fontsource/m-plus-rounded-1c/500.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div
      className={`max-w-screen min-h-screen bg-[#c5c7cc] bg-opacity-40 px-6 pt-12 pb-4 lg:px-52 lg:pt-16 lg:pb-8 xl:px-96 xl:pb-12 2xl:px-[500px]`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
