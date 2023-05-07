const Iframe = ({ url }) => {
  return <iframe className="absolute inset-0 h-full w-full" src={url}></iframe>;
};

export default Iframe;
