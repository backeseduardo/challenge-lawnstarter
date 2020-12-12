<?php

namespace App\Http\Controllers;

use App\Models\Statistic;
use App\Models\StatisticLog;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller;

class StatisticController extends Controller
{
  public function index()
  {
    $statistic = Statistic::first();

    if ($statistic === null) {
      return response('', 204);
    }

    return [
      'most_searched_person' => [
        'term' => $statistic->most_searched_person,
        'times' => $statistic->most_searched_person_times
      ],
      'most_searched_film' => [
        'term' => $statistic->most_searched_film,
        'times' => $statistic->most_searched_film_times
      ],
      'average_time_response' => $statistic->average_time_response
    ];
  }
}
