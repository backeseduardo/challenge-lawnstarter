<?php

namespace App\Http\Controllers;

use App\Enums\StarWarsAPIResourceEnum;
use App\Services\MeasureExecutionTimeServiceInterface;
use App\Services\StarWarsAPIServiceInterface;
use App\Services\StatisticLogServiceInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Laravel\Lumen\Routing\Controller;

class StarWarsAPIController extends Controller
{
  private $starWarsAPIService;
  private $statisticLogService;
  private $measureExecutionTimeService;

  public function __construct(
    StarWarsAPIServiceInterface $starWarsAPIService,
    StatisticLogServiceInterface $statisticLogService,
    MeasureExecutionTimeServiceInterface $measureExecutionTimeService
  ) {
    $this->starWarsAPIService = $starWarsAPIService;
    $this->statisticLogService = $statisticLogService;
    $this->measureExecutionTimeService = $measureExecutionTimeService;
  }
  public function index(Request $request, string $resource)
  {
    $searchTerm = $request->input('q');

    $this->validateResource($resource);

    $this->validateSearchTerm($searchTerm);

    [$executionTimeInMilliseconds, $response] = $this->measureExecutionTimeService->execute(fn() => $this->starWarsAPIService->find($resource, $searchTerm));

    $this->statisticLogService->log($resource, $searchTerm, $executionTimeInMilliseconds);

    return $response;
  }

  private function validateResource(string $resource): void
  {
    if (in_array($resource, [StarWarsAPIResourceEnum::PEOPLE, StarWarsAPIResourceEnum::FILMS]) === false) {
      throw new HttpException(400);
    }
  }

  private function validateSearchTerm(?string $searchTerm): void
  {
    if ($searchTerm === null || $searchTerm === '') {
      throw new HttpException(400);
    }
  }
}
