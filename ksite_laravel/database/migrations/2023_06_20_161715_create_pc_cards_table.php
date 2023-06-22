<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pc_cards', function (Blueprint $table) {
            $table->id();

            $table->string("title");
            $table->string("GPU");
            $table->string("CPU");
            $table->string("Motherboard");
            $table->string("RAM");
            $table->string("HDD");
            $table->string("Case");

            $table->integer("Cost");

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
        Schema::dropIfExists('pc_cards');
    }
};
