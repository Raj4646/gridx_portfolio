import Image from "next/image";

export default function Icon() {
  return (
    <Image
      className="opacity-30 hover:opacity-100"
      src="/icon.svg"
      width={45}
      height={45}
      alt="icon"
    />
  );
}
