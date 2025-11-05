import Careercard from "./careercards";

const Openingposition = () => {
  const data = [
    {
      head: "Senior Supervisor",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar pretium lectus quis lobortis.",
    },
    {
      head: "Area Manager",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar pretium lectus quis lobortis.",
    },
    {
      head: "Marketing Specialist",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar pretium lectus quis lobortis.",
    },
    {
      head: "Financial Analyst",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar pretium lectus quis lobortis.",
    },
  ];

  return (
    <div className="w-full flex flex-col  py-10 items-center relative">
      <hr className="h-px bg-[#000000] w-3/4 my-20" />
    <div className="w-[100%] md:w-[80%] ">
      <h2 className="text-[35px] text-center md:text-5xl w-full leading-[1] text-black font-semibold">
        Opening Positions
      </h2>

      <p className="text-[#5A5A5A] px-4 md:px-0 font-medium py-4 mx-auto  max-w-3xl text-[20px] leading-[1.5] text-center md:leading-[1.3] line-clamp-6">
        Join our innovative team and shape the future of real estate. We're
        looking for passionate professionals who want to make a difference in
        people's lives.
      </p>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8 w-[100%] items-center justify-items-center">
        {data.map((item, index) => (
          <Careercard key={index} head={item.head} text={item.text} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Openingposition;
