import axios from "axios";
import { useEffect, useState } from "react";

interface Submissions {
  Sid: string;
  Pid: number;
  Email: string;
  Language: string;
  Code: string;
  Status: string;
}

const Submissions: React.FC<{ id: string; setCode: React.Dispatch<React.SetStateAction<string>> }> = ({ id, setCode }) => {
  const [submissions, setSubmissions] = useState<Submissions[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch all submissions
  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3050/submission/${id}`, {
        headers: {
          user: localStorage.getItem("authToken"),
        },
      });
      setSubmissions(res.data);  // Assuming the response contains all submissions
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [id]);

  // Pagination logic
  const itemsPerPage = 10;
  const totalPages = Math.ceil(submissions.length / itemsPerPage);
  const currentItems = submissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Pagination control buttons
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pt-3 pl-8 pr-12 w-full">
      {loading ? (
        <p className="flex h-96 w-full justify-center items-center font-semibold">Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="flex h-96 w-full justify-center items-center font-semibold">No Solutions Found</p>
      ) : (
        <div>
          <div className="flex justify-between items-center h-12 border-2 border-black px-10 w-full">
            <p>Status</p>
            <p>Language</p>
            <p>View</p>
          </div>
          {currentItems.map((submission, index) => {
            return (
              <div className="flex justify-between px-9 items-center h-12" key={index}>
                <p>{submission.Status}</p>
                <p>{submission?.Language}</p>
                <p
                  className="text-blue-700 underline cursor-pointer"
                  onClick={() => setCode(submission.Code)}
                >
                  View
                </p>
              </div>
            );
          })}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submissions;
