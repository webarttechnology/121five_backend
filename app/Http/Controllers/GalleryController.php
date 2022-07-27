<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;

class GalleryController extends Controller
{
    public function GalleryByPhotographerID($id){
        return response()-> json(Gallery::where('photographer_id', $id) -> get(), 200);
    }


    public function Gallery(){
        return response()-> json(Gallery::with('photographer') -> get(), 200);
    }

    public function GalleryById($id){
        return response()-> json(Gallery::find($id), 200);
    }

    public function GallerySave(Request $request){
        $image = $request -> all('image');   
        $file_name = $image['image'];
        $imageName = time().'.'.$file_name->getClientOriginalExtension();
        $file_name->move(public_path().'/uploads/', $imageName);  
        $gallery = Gallery::create(['image' => 'uploads/'.$imageName, 'title' => $request -> input('title') , 'photographer_id' => $request -> input('photographer_id') , 'url' => $request -> input('url')]);
        return response()-> json($gallery, 201);     
    }

    public function GalleryUpdate(Request $request){        
        $Gallery = Gallery::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);
            $Gallery ->fill([
                'title' => $request -> input('title'),
                'url' => $request -> input('url'),
                'image' => 'uploads/'.$imageName,
                'photographer_id' => $request -> input('photographer_id')
             ]);      
        }else{
            $Gallery ->fill([
                'title' => $request -> input('title'),
                'url' => $request -> input('url'),
                'photographer_id' => $request -> input('photographer_id')
             ]);
        }    

        $Gallery -> save();
        return response()-> json($Gallery, 201);
    }

    public function GalleryDelete($id){
        $Gallery = Gallery::find($id);
        $Gallery -> delete();
    }
}
