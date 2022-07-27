<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Institute;

class InstituteController extends Controller
{
    public function Institute(){
        return response()-> json(Institute::get(), 200);
    }

    public function InstituteById($id){
        return response()-> json(Institute::find($id), 200);
    }

    public function InstituteSave(Request $request){
        $Institute = Institute::create($request -> all());
        return response()-> json($Institute, 201);
    }

    public function InstituteUpdate(Request $request, $id){
        $Institute = Institute::find($id);
        $Institute -> title = $request-> title;
        $Institute -> url = $request -> url;
        $Institute -> save();
        return response()-> json($Institute, 201);
    }

    public function InstituteDelete($id){
        $Institute = Institute::find($id);
        $Institute -> delete();
    }
}
