<?php

namespace App\Http\Controllers;

use App\Services\StarWarsAPIServiceInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Laravel\Lumen\Routing\Controller;

class StarWarsAPIController extends Controller
{
  private $starWarsAPIService;

  public function __construct(StarWarsAPIServiceInterface $starWarsAPIService)
  {
    $this->starWarsAPIService = $starWarsAPIService;
  }

  public function index(Request $request, string $resource)
  {
    $searchTerm = $request->input('q');

    $this->validateResource($resource);

    $this->validateSearchTerm($searchTerm);

    return $this->starWarsAPIService->find($resource, $searchTerm);
  }

  private function validateResource(string $resource): void
  {
    if (in_array($resource, ['people', 'films']) === false) {
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
