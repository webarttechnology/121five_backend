<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feature;

class FeaturesController extends Controller
{
    public function Feature(){
        return response()-> json(Feature::get(), 200);
    }

    public function FeatureById($id){
        return response()-> json(Feature::find($id), 200);
    }

    public function FeatureSave(Request $request){
        $image = $request -> all('image');   
        $file_name = $image['image'];
        $imageName = time().'.'.$file_name->getClientOriginalExtension();
        $file_name->move(public_path().'/uploads/', $imageName);  
        $Feature = Feature::create(['image' => 'uploads/'.$imageName, 'title' => $request -> input('title')]);
        return response()-> json($Feature, 201);     
    }

    public function FeatureUpdate(Request $request){        
        $Feature = Feature::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);
            $Feature ->fill([
                'title' => $request -> input('title'),
                'url' => $request -> input('url'),
                'image' => 'uploads/'.$imageName,
             ]);      
        }else{
            $Feature ->fill([
                'title' => $request -> input('title'),
                'url' => $request -> input('url')
             ]);
        }    

        $Feature -> save();
        return response()-> json($Feature, 201);
    }

    public function FeatureDelete($id){
        $Feature = Feature::find($id);
        $Feature -> delete();
    }
}

