<?php
namespace App\Services;

interface StarWarsAPIServiceInterface
{
  public function find(string $resource, string $searchTerm);
}
