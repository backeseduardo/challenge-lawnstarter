import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Panel from '../components/Panel';

export default function Statistics() {
  const { push } = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [statistics, setStatistics] = useState(null);

  async function fetchStatistics() {
    setIsLoading(true);

    try {
      const { status, data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/statistics`
      );

      if (status === 200) {
        setStatistics(data);
      } else {
        setStatistics(null);
      }
    } catch {
      setStatistics(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <Panel
      className="col-start-3 col-span-8 flex flex-row justify-between"
      style={{ minHeight: 400 }}
    >
      <div>
        <h1 className="font-bold text-lg">Statistics</h1>

        <div className="mt-7 grid gap-24 grid-cols-2">
          <div className="col-start-1 col-end-2">
            <h2 className="font-bold">Most searched person term</h2>

            <hr className="mt-2-5 mb-1 border-gray-dark" />

            {isLoading && (
              <span className="font-bold text-sm text-gray-dark">
                Loading...
              </span>
            )}

            {isLoading === false && !statistics?.most_searched_person && (
              <span className="font-bold text-sm text-gray-dark">
                No results yeat.
              </span>
            )}

            {isLoading === false && statistics?.most_searched_person && (
              <span className="folt-bold">
                {statistics?.most_searched_person?.term}
              </span>
            )}
          </div>

          <div className="col-start-2 col-end-3">
            <h2 className="font-bold">Most searched movie term</h2>

            <hr className="mt-2-5 mb-1 border-gray-dark" />

            {isLoading && (
              <span className="font-bold text-sm text-gray-dark">
                Loading...
              </span>
            )}

            {isLoading === false && !statistics?.most_searched_film && (
              <span className="font-bold text-sm text-gray-dark">
                No results yeat.
              </span>
            )}

            {isLoading === false && statistics?.most_searched_film && (
              <span className="folt-bold">
                {statistics?.most_searched_film?.term}
              </span>
            )}
          </div>
        </div>

        <div className="mt-7">
          <h2 className="font-bold">Average response time</h2>

          <hr className="mt-2-5 mb-1 border-gray-dark" />

          {isLoading && (
            <span className="font-bold text-sm text-gray-dark">Loading...</span>
          )}

          {isLoading === false && !statistics?.average_time_response && (
            <span className="font-bold text-sm text-gray-dark">
              No results yeat.
            </span>
          )}

          {isLoading === false && statistics?.average_time_response && (
            <span className="folt-bold">
              {statistics?.average_time_response / 1000}

              {' seconds'}
            </span>
          )}
        </div>
      </div>

      <div>
        <Button onClick={() => push('/')}>Back to search</Button>
      </div>
    </Panel>
  );
}
