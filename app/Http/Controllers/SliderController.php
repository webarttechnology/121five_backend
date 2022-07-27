<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;

class SliderController extends Controller
{
    public function Slider(){
        return response()-> json(Slider::get(), 200);
    }

    public function SliderById($id){
        return response()-> json(Slider::find($id), 200);
    }

    public function SliderSave(Request $request){
        $image = $request -> all('image');   
        $file_name = $image['image'];
        $imageName = time().'.'.$file_name->getClientOriginalExtension();
        $file_name->move(public_path().'/uploads/', $imageName);  
        $slider = Slider::create(['image' => 'uploads/'.$imageName, 'title' => $request -> input('title')]);
        return response()-> json($slider, 201);       
    }

    public function SliderUpdate(Request $request){        
        $Slider = Slider::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);
            $Slider ->fill([
                'title' => $request -> input('title'),
                'image' => 'uploads/'.$imageName,
             ]);      
        }else{
            $Slider ->fill([
                'title' => $request -> input('title')
             ]);
        }    

        $Slider -> save();
        return response()-> json($Slider, 201);
    }

    public function SliderDelete($id){
        $Slider = Slider::find($id);
        $Slider -> delete();
    }
}