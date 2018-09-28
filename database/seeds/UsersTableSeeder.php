<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	User::create([
    		'name'      => 'Elinardo Silva',
    		'email'     => 'elinardosilva@gmail.com',
    		'password'  => Hash::make('test'),
    		'saved'     => [1,5,7,9]
    		]);

    	User::create([
    		'name'      => 'rosemeire nunes',
    		'email'     => 'rosy@gmail.com',
    		'password'  => Hash::make('test'),
    		'saved'     => [2,11,22]
    		]);
    }
}
