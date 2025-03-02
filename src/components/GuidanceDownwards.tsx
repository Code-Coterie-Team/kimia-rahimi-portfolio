import {motion} from "framer-motion"
const GuidanceDownwards = ()=> {
  return (
    <div className=" flex flex-col justify-center items-center ">
    {[...Array(3)].map((_, index) => (
      <motion.span
        key={index}
        className="size-4 border-white border-r-2 border-b-2"
        animate={{
          rotate: [45, 45, 45],
          y: [-15, 0, 15],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          delay:index*0.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    ))}
  </div>
  )
}

export default GuidanceDownwards