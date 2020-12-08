import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Panel from '../components/Panel';

export default function MovieDetails() {
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
        <h1 className="font-bold text-lg">{state?.title}</h1>

        <div className="my-7 grid gap-24 grid-cols-2">
          <div className="col-start-1 col-end-2">
            <h2 className="font-bold">Opening Crawl</h2>

            <hr className="mt-2-5 mb-1 border-gray-dark" />

            <p className="text-sm">{state?.opening_crawl}</p>
          </div>

          <div className="col-start-2 col-end-3">
            <h2 className="font-bold">Characters</h2>

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
