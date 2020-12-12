<?php

use Illuminate\Support\Facades\Http;

class StarWarsAPIControllerTest extends TestCase
{
  protected function setUp(): void
  {
    parent::setUp();
  }

  public function testShouldEnviroment(): void
  {
    $this->assertEquals('sqlite', getenv('DB_CONNECTION'));
    $this->assertEquals('testing', getenv('APP_ENV'));
  }

  public function testShouldFindPeople(): void
  {
    Http::fake([
      'https://swapi.dev/api/*' => Http::response($this->mockResponse, 200),
    ]);

    $this->get('/people?q=bi');

    $this->assertResponseStatus(200);

    $this->response->assertJson($this->mockResponse['results']);
  }

  public function testShouldReturnErrorIfResourceIsInvalid(): void
  {
    Http::fake([
      'https://swapi.dev/api/*' => Http::response($this->mockResponse, 200),
    ]);

    $this->get('/not-valid?q=bi');

    $this->assertResponseStatus(400);
  }

  public function testShouldReturnErrorIfSearchTermIsNotSent(): void
  {
    Http::fake([
      'https://swapi.dev/api/*' => Http::response($this->mockResponse, 200),
    ]);

    $this->get('/people');

    $this->assertResponseStatus(400);
  }

  public function testShouldReturnErrorIfSearchTermIsSentEmpty(): void
  {
    Http::fake([
      'https://swapi.dev/api/*' => Http::response($this->mockResponse, 200),
    ]);

    $this->get('/people?q=');

    $this->assertResponseStatus(400);
  }

  private $mockResponse = [
    'count' => 1,
    'next' => null,
    'previous' => null,
    'results' => [
      [
        'name' => 'Biggs Darklighter',
        'height' => '183',
        'mass' => '84',
        'hair_color' => 'black',
        'skin_color' => 'light',
        'eye_color' => 'brown',
        'birth_year' => '24BBY',
        'gender' => 'male',
        'homeworld' => 'http://swapi.dev/api/planets/1/',
        'films' => [
          'http://swapi.dev/api/films/1/'
        ],
        'species' => [],
        'vehicles' => [],
        'starships' => [
          'http://swapi.dev/api/starships/12/'
        ],
        'created' => '2014-12-10T15:59:50.509000Z',
        'edited' => '2014-12-20T21:17:50.323000Z',
        'url' => 'http://swapi.dev/api/people/9/'
      ]
    ],
  ];
}
