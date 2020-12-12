<?php

namespace App\Http\Controllers;

use App\Enums\StarWarsAPIResourceEnum;
use App\Services\StarWarsAPIServiceInterface;
use App\Services\StatisticLogServiceInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Laravel\Lumen\Routing\Controller;

class StarWarsAPIController extends Controller
{
  private $starWarsAPIService;
  private $statisticLogService;

  public function __construct(
    StarWarsAPIServiceInterface $starWarsAPIService,
    StatisticLogServiceInterface $statisticLogService
  ) {
    $this->starWarsAPIService = $starWarsAPIService;
    $this->statisticLogService = $statisticLogService;
  }

  public function index(Request $request, string $resource)
  {
    $searchTerm = $request->input('q');

    $this->validateResource($resource);

    $this->validateSearchTerm($searchTerm);

    $this->statisticLogService->log($resource, $searchTerm);

    return $this->starWarsAPIService->find($resource, $searchTerm);
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
