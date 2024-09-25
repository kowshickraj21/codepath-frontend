
const Result: React.FC<{Error:string}> = ({Error}) => {
  return (
    <div className="mt-5 px-5 py-3 mr-5 text-red-500  bg-opacity-30">
    <pre >
      {Error}
    </pre>
    </div>
  )
}

export default Result
