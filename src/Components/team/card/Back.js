export default function Back({ item }) {
  return (
    <div className="back-card absolute w-full h-full inset-0 p-[1rem] flex flex-col gap-[0.8rem] text-xl">
      <p>
        <span className="font-bold">Year: </span>
        {item.text.year}
      </p>
      <p>
        <span className="font-bold">Program: </span>
        {item.text.program}
      </p>
      <p>
        <span className="font-bold">Responsibility: </span>
        {item.text.responsibility}
      </p>
      <p>
        <span className="font-bold">Fun fact: </span>
        {item.text.funFact}
      </p>
    </div>
  );
}
