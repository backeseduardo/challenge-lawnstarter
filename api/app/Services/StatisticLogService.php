<?php

namespace App\Services;

use App\Models\StatisticLog;

class StatisticLogService implements StatisticLogServiceInterface
{
  public function log(string $searchTerm)
  {
    $log = new StatisticLog();

    $log->search_term = $searchTerm;

    $log->save();
  }
}
