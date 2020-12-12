<?php

namespace App\Services;

interface StatisticLogServiceInterface
{
  public function log(string $resource, string $searchTerm);
}
