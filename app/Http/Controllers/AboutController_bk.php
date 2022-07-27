<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\AboutModel;

class AboutController extends Controller
{
    
    public function about(){
        return response()-> json(AboutModel::get(), 200);
    }
}
