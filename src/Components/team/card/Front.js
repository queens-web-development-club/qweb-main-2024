import Image from "next/image";

export default function Front({ item }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem] front-card">
      <Image
        src={item.image}
        width={300}
        height={300}
        alt={item.name}
        sizes="100vw"
      />
      <p className="font-bold text-xl">{item.name}</p>
      <p className="mt-[-1rem]">{item.role}</p>
    </div>
  );
}