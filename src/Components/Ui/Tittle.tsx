const Tittle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-2xl lg:mb-[42px] mb-6 lg:mt-[70px] mt-10 font-bold border-b-2 inline-block pr-8 pb-4 border-[#f97316]">
      {text}
    </h1>
  );
};

export default Tittle;
