<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class StarWarsAPIService implements StarWarsAPIServiceInterface
{
  public function find(string $resource, string $searchTerm)
  {
    $response = Http::get("https://swapi.dev/api/$resource", [
      'search' => $searchTerm,
    ]);

    $jsonResponse = json_decode($response->body());

    return $jsonResponse->results;
  }
}
