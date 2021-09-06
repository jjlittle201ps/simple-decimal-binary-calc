import { useState } from "react"

export default function Home() {
  const [binary, setBinary] = useState(0)

  const initialDecimal = (val) => {
    const number = parseInt(val)
    const result = number.toString(2)
    setBinary(result)

  }

  return (
    <div className="flex items-center justify-center">

      <div className=" grid grid-cols-1  py-20">
        <div className="text-2xl pb-5 text-gray-700  font-bold mb-2 py-5">Decimal to Binary Calculator</div>
        <label className="block text-gray-700 text-sm font-bold mb-2 py-5" htmlFor="decimalInput">
          Decimal:
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="decimalInput" value={this} onChange={e => initialDecimal(e.target.value)}></input>
        <label className="block text-gray-700 text-sm font-bold mb-2 py-5" htmlFor="binaryOutput">
          Binary:
        </label>
        <span className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="binaryOutput">{binary}</span>
      </div>
    </div>

  )
}
