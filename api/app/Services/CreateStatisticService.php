<?php

namespace App\Services;

use App\Enums\StarWarsAPIResourceEnum;
use App\Models\Statistic;
use App\Models\StatisticLog;
use Illuminate\Support\Facades\DB;

class CreateStatisticService implements CreateStatisticServiceInterface
{
  public function execute()
  {
    $statistic = Statistic::first();

    if ($statistic === null) {
      $statistic = new Statistic();
    }

    $mostSearchedPerson = $this->getMostSearched(StarWarsAPIResourceEnum::PEOPLE);

    $statistic->most_searched_person = $mostSearchedPerson->search_term;
    $statistic->most_searched_person_times = $mostSearchedPerson->times;

    $mostSearchedFilm = $this->getMostSearched(StarWarsAPIResourceEnum::FILMS);

    $statistic->most_searched_film = $mostSearchedFilm->search_term;
    $statistic->most_searched_film_times = $mostSearchedFilm->times;

    $averageExecutionTimeInMilliseconds = $this->getAverageExecutionTime();

    $statistic->average_time_response = $averageExecutionTimeInMilliseconds;

    $statistic->save();
  }

  private function getMostSearched(string $resource)
  {
    return StatisticLog::select(DB::raw('search_term, count(search_term) as times'))
      ->where('search_resource', $resource)
      ->groupBy('search_term')
      ->orderBy('times', 'desc')
      ->first();
  }

  private function getAverageExecutionTime()
  {
    $statisticAverage = StatisticLog::select(DB::raw('avg(execution_time_in_milliseconds) average_execution_time'))->first();

    return round($statisticAverage->average_execution_time);
  }
}
