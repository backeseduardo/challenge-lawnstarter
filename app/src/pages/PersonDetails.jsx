import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Panel from '../components/Panel';

export default function PersonDetails() {
  const {
    push,
    location: { state },
  } = useHistory();

  return (
    <Panel
      className="col-start-3 col-span-8 flex flex-row justify-between"
      style={{ minHeight: 400 }}
    >
      <div>
        <h1 className="font-bold text-lg">{state?.name}</h1>

        <div className="mt-7 grid gap-24 grid-cols-2">
          <div className="col-start-1 col-end-2">
            <h2 className="font-bold">Details</h2>

            <hr className="mt-2-5 mb-1 border-gray-dark" />

            <div className="flex flex-col">
              <span className="text-sm">
                {'Birth Year: '}
                {state?.birth_year}
              </span>
              <span className="text-sm">
                {'Gender: '}
                {state?.gender}
              </span>
              <span className="text-sm">
                {'Eye Color: '}
                {state?.eye_color}
              </span>
              <span className="text-sm">
                {'Hair Color: '}
                {state?.hair_color}
              </span>
              <span className="text-sm">
                {'Height: '}
                {state?.height}
              </span>
              <span className="text-sm">
                {'Mass: '}
                {state?.mass}
              </span>
            </div>
          </div>

          <div className="col-start-2 col-end-3">
            <h2 className="font-bold">Movies</h2>

            <hr className="mt-2-5 mb-1 border-gray-dark" />

            <div className="flex flex-col">
              <span className="text-sm">-</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button onClick={() => push('/')}>Back to search</Button>
      </div>
    </Panel>
  );
}
