import { Arrow, EslintSvg, GitignoreSvg, NextConfigSvg, Nexticon, Nodemodule, PackageLockSvg, Public, Src, TailwindSvg, TsConfigSvg } from "@/icons"

const Portfolioitems = ()=> {
  return (
    <div className="w-full flex flex-col text-base ">
        <div>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
            <div>
              <Arrow />
            </div>
            <Nexticon/>
            <span className="text-gray-300/40">.next</span>
          </button>
            <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
            <div>
              <Arrow />
            </div>
            <Nodemodule/>
            <span className="text-gray-300/40">node_modules</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
            <div>
              <Arrow />
            </div>
            <Public/>
            <span className="text-gray-400">public</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
            <div>
              <Arrow />
            </div>
            <Src/>
            <span className="text-gray-400">src</span>
          </button>

        </div>
        <div>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <EslintSvg/>
            <span className="text-gray-400">.eslintrc.json</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <GitignoreSvg/>
            <span className="text-gray-400">.gitignore</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <NextConfigSvg/>
            <span className="text-gray-400">next.config.js</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <PackageLockSvg/>
            <span className="text-gray-400">package-lock.json</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <PackageLockSvg/>
            <span className="text-gray-400">package.json</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <TailwindSvg/>
            <span className="text-gray-400">tailwind.config.ts</span>
          </button>
          <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
            <TsConfigSvg/>
            <span className="text-gray-400 ">tsconfig.json</span>
          </button>
        </div>
    </div>
  )
}

export default Portfolioitems