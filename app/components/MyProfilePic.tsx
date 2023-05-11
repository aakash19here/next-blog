import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
        <Image 
            className="border-4 drop-shadow-xl rounded-full mx-auto mt-8"
            src="/images/aakash19here.jpeg"
            alt="Profile Pic"
            width={150}
            height={150}
            priority={true}
        />
    </section>
  )
}
