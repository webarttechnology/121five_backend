<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\About;

class AboutController extends Controller
{
    
    public function about(){
        return response()-> json(About::get(), 200);
    }

    public function aboutById($id){
        return response()-> json(About::find($id), 200);
    }

    public function aboutSave(Request $request){
        $validator = Validator::make($request->all(), [
            'title'     => 'required|unique:abouts',
            'description'    => 'required',
        ]);

        if ($validator->fails()) {
            $responseArr['message'] = $validator->errors();;
            return response()->json($responseArr, 200);
        }else{
            $about = About::create($request -> all());
            return response()-> json($about, 201);
        }        
    }

    public function aboutUpdate(Request $request, $id){
        $about = About::find($id);
        $about -> title = $request-> title;
        $about -> description = $request -> description;
        $about -> save();
        return response()-> json($about, 201);
    }

    public function aboutDelete($id){
        $about = About::find($id);
        $about -> delete();
    }
}
