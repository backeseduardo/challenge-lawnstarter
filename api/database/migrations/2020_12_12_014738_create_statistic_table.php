<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatisticTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('statistic', function (Blueprint $table) {
      $table->id();
      $table->string('most_searched_person')->nullable();
      $table->integer('most_searched_person_times')->nullable();
      $table->string('most_searched_film')->nullable();
      $table->integer('most_searched_film_times')->nullable();
      $table->integer('average_time_response')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('statistic');
  }
}
