<?php

namespace App\Services;

class MeasureExecutionTimeService implements MeasureExecutionTimeServiceInterface
{
  public function execute($fn)
  {
    $start = microtime(true);

    $response = $fn();

    $executionTimeInMilliseconds = round((microtime(true) - $start) * 1000);

    return [$executionTimeInMilliseconds, $response];
  }
}
