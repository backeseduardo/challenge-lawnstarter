import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Panel from './Panel';

function ResultBox(props) {
  const { className, style, isLoading, results } = props;

  const { push } = useHistory();

  return (
    <Panel className={className} style={style}>
      <h2 className="text-lg font-bold">Results</h2>

      <hr className="mt-2-5 border-gray-dark" />

      {isLoading && (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="font-bold text-sm text-gray-dark">Searching...</span>
        </div>
      )}

      {isLoading === false && results.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <span className="font-bold text-sm text-gray-dark">
            There are zero matches.
          </span>
          <span className="font-bold text-sm text-gray-dark">
            Use the form to search for People or Movies.
          </span>
        </div>
      )}

      {isLoading === false && results.length > 0 && (
        <ul>
          {results?.map((result) => (
            <li key={result.name ?? result.title}>
              <div className="flex flex-row justify-between items-center py-2 border-b border-gray-dark">
                <span className="font-bold">{result.name ?? result.title}</span>

                <Button
                  onClick={() => {
                    push(
                      result.name ? '/person-details' : '/movie-details',
                      result
                    );
                  }}
                >
                  See details
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

ResultBox.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  isLoading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
};

ResultBox.defaultProps = {
  className: undefined,
  style: undefined,
  isLoading: false,
  results: [],
};

export default ResultBox;
