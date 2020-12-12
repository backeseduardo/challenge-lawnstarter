<?php

namespace App\Services;

use App\Enums\StarWarsAPIResourceEnum;
use App\Models\StatisticLog;
use Error;

class StatisticLogService implements StatisticLogServiceInterface
{
  public function log(string $resource, string $searchTerm, int $executionTimeInMilliseconds)
  {
    $log = new StatisticLog();

    $log->search_resource = $resource;
    $log->search_term = $searchTerm;
    $log->execution_time_in_milliseconds = $executionTimeInMilliseconds;

    $log->save();
  }
}
