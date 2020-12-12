<?php

namespace App\Jobs;

use App\Services\CreateStatisticServiceInterface;

class CreateStatisticJob extends Job
{
  public function __construct()
  {
  }

  public function handle(CreateStatisticServiceInterface $createStatisticService)
  {
    $createStatisticService->execute();
  }
}
