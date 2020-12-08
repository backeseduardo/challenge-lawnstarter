import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Panel from './Panel';
import Radio from './Radio';

function SearchBox(props) {
  const { className, value, onChange, onSearch, isLoading } = props;

  const isSendEnabled = value.searchValue !== '';

  return (
    <Panel className={className}>
      <span className="text-gray-darker mb-5">What are you searching for?</span>

      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();

          if (isSendEnabled) {
            onSearch(e);
          }
        }}
      >
        <div className="flex flex-row mb-5">
          <Radio
            name="searchType"
            value="people"
            label="People"
            onChange={() => {
              onChange({
                ...value,
                searchType: 'people',
              });
            }}
            selected={value.searchType}
          />

          <Radio
            className="ml-7"
            name="searchType"
            value="films"
            label="Movies"
            onChange={() => {
              onChange({
                ...value,
                searchType: 'films',
              });
            }}
            selected={value.searchType}
          />
        </div>

        <Input
          name="search"
          className="mb-5"
          placeholder={
            value.searchType === 'people'
              ? 'e.g. Chewbacca, Yoda, Boba Fett'
              : 'e.g. A New Hope, The Empire Strikes Back'
          }
          value={value.searchValue}
          onChange={(e) => {
            onChange({
              ...value,
              searchValue: e.target.value,
            });
          }}
        />

        <Button type="submit" disabled={!isSendEnabled}>
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </form>
    </Panel>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.shape({
    searchType: PropTypes.oneOf(['people', 'films']),
    searchValue: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

SearchBox.defaultProps = {
  className: undefined,
  isLoading: false,
};

export default SearchBox;
