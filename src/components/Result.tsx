
const Result: React.FC<{Error:string}> = ({Error}) => {
  return (
    <div className="mt-5 px-5 py-3 mr-5 max-h-80 text-red-500 bg-red-300 rounded-lg bg-opacity-30 whitespace-pre overflow-auto">
      {Error}
    </div>
  )
}

export default Result
