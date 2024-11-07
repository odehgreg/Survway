<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function home()
    {
        return Inertia::render('Dashboard'); // This points to Home.vue in your Vue Pages directory
    }
}
