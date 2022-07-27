<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{
    public function Banner(){
        return response()-> json(Banner::get(), 200);
    }

    public function BannerById($id){
        return response()-> json(Banner::find($id), 200);
    }

    public function BannerSave(Request $request){
        $image = $request -> all('image');   
        $file_name = $image['image'];
        $imageName = time().'.'.$file_name->getClientOriginalExtension();
        $file_name->move(public_path().'/uploads/', $imageName);  
        $slider = Slider::create(['image' => 'uploads/'.$imageName, 'title' => $request -> input('title')]);
        return response()-> json($slider, 201);       
    }

    public function BannerUpdate(Request $request){   

        $Slider = Banner::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);
            $Slider ->fill([
                'page_id' => $request -> input('page_id'),
                'image' => 'uploads/'.$imageName,
             ]);      
        }else{
            $Slider ->fill([
                'page_id' => $request -> input('page_id'),
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
