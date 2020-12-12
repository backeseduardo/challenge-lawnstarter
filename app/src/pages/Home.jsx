import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Panel from '../components/Panel';
import ResultBox from '../components/ResultBox';
import SearchBox from '../components/SearchBox';

export default function Home() {
  const { push } = useHistory();

  const [search, setSearch] = useState({
    searchType: 'people',
    searchValue: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState([]);

  async function fetchResults() {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/${search.searchType}?q=${search.searchValue}`
      );

      setResult(data);
    } catch {
      setResult([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="col-start-2 col-span-4">
        <SearchBox
          value={search}
          onChange={setSearch}
          onSearch={() => {
            fetchResults();
          }}
          isLoading={isLoading}
        />

        <Panel className="mt-7">
          <Button
            onClick={() => {
              push('/statistics');
            }}
          >
            Statistics
          </Button>
        </Panel>
      </div>

      <div className="col-start-6 col-span-6">
        <ResultBox
          style={{
            height: 582,
          }}
          isLoading={isLoading}
          results={result}
        />
      </div>
    </>
  );
}
